import { getCookie, setCookie } from 'cookies-next';
import moment from 'moment';

import { customQueries, getShortenedUrl, getUserLocation } from '../common';
import { pinpoint, pinPointOptions } from './pinpointAnalytics';
import { getMarketCategory } from './pinpointMarketCategory';
import {
  endpointId,
  pinpointSessionId,
  pinpointSessionStartTime,
  randomString,
  userDetails,
} from './pinpointParams';
import { PutEventsCommand } from '@aws-sdk/client-pinpoint';
import { PinPointEvent } from '../../types/common';

const engagedUserEvents = [
  'showcase_viewed',
  'showcase_liked',
  'service_viewed',
  'service_liked',
  'showcaseShared',
  'service_shared',
  'postviewed',
  'postshared',
  'postliked',
  'portfolio_share',
];

interface EventParams {
  eventName: string;
  metrics?: Record<string, any>;
  attributes?: Record<string, any>;
  isNewSession?: boolean;
  query?: Record<string, any>;
}

export const putEvent = async ({
  eventName,
  metrics = {},
  attributes = {},
  isNewSession = false,
  query = {},
}: EventParams): Promise<void> => {
  const sessionId = pinpointSessionId({ isNewSession });
  const sessionStartTime = pinpointSessionStartTime();
  const user = userDetails();
  let userId: string;

  const userData = user?.details ? user : null;
  const { eventUserAttributes = {}, ...restOfAttributes } = attributes;

  let userMarketCategory = getMarketCategory({
    user: userData,
    action: eventName,
  });

  if (eventName === '_userauth.sign_up') {
    userMarketCategory = {
      marketSegment: ['explorer'],
      daysSinceRegistration: ['0'],
    };
  }

  const endPointAttributes = customQueries({ query });
  const queries: Record<string, string> = {};
  Object.keys(endPointAttributes).forEach((key) => {
    queries[key] = endPointAttributes[key][0];
  });

  const savedUserId = getCookie('savedUserId');

  if (userData) {
    userId = user?.details?.userId as string;
  } else if (savedUserId) {
    userId = savedUserId as string;
  } else {
    const saveId = `user_${randomString()}`;
    setCookie('savedUserId', saveId);
    userId = saveId;
  }

  const params = await pinPointOptions({ userId });
  const endpointIdValue = (await endpointId()) || '';
  const userHasPhoneNumber =
    params.EndpointRequest.User?.UserAttributes?.phone[0]?.trim().length > 0;

  const {
    viewercity,
    viewercountrycode,
    Longitude,
    Latitude,
    ...restOfEventUserAttributes
  } = eventUserAttributes;
  const locationAvailable = Boolean(viewercity && viewercountrycode[0]);
  const location = locationAvailable
    ? {
        Location: {
          City: viewercity[0],
          Country: viewercountrycode[0], // country is supposed to be two characters
          Latitude,
          Longitude,
        },
      }
    : {};

  const User = {
    ...params.EndpointRequest.User,
    UserAttributes: {
      ...(params?.EndpointRequest?.User?.UserAttributes || {}),
      ...userMarketCategory,
      ...restOfEventUserAttributes,
    },
  };

  const Events = {
    [eventName]: {
      EventType: eventName,
      Timestamp: moment().toISOString(),
      AppPackageName: String(params.EndpointRequest.Attributes.appName),
      AppVersionCode: String(params.EndpointRequest.Attributes.appVersion),
      Metrics: metrics, // metric specific to the event
      Attributes: {
        ...restOfAttributes,
        ...queries,
      },
      Session: {
        Id: sessionId, // required
        StartTimestamp: sessionStartTime, // required
      },
    },
  };

  const eventParams = {
    ApplicationId: params.ApplicationId,
    EventsRequest: {
      BatchItem: {
        [`${endpointIdValue}_email`]: {
          Endpoint: {
            Address: params.EndpointRequest.User?.UserAttributes?.email[0],
            Attributes: params.EndpointRequest.Attributes,
            ...location,
            ChannelType: 'EMAIL',
            Demographic: params.EndpointRequest.Demographic,
            EffectiveDate: params.EndpointRequest.EffectiveDate,
            EndpointStatus: params.EndpointRequest.EndpointStatus,
            OptOut: params.EndpointRequest.OptOut,
            User,
          },
          Events,
        },
        ...(userHasPhoneNumber
          ? {
              [`${endpointIdValue}_sms`]: {
                Endpoint: {
                  Address:
                    params.EndpointRequest.User?.UserAttributes?.phone[0],
                  Attributes: params.EndpointRequest.Attributes,
                  ...location,
                  ChannelType: 'SMS',
                  Demographic: params.EndpointRequest.Demographic,
                  EffectiveDate: params.EndpointRequest.EffectiveDate,
                  EndpointStatus: params.EndpointRequest.EndpointStatus,
                  OptOut: params.EndpointRequest.OptOut,
                  User,
                },
                Events,
              },
            }
          : {}),
      },
    },
  };

  try {
    const command = new PutEventsCommand(eventParams);
    await pinpoint.send(command);
  } catch (error) {
    console.error(error);
  }
};

interface ParamsType {
  eventName: string;
  params?: {
    attributes?: Record<string, any>;
    query?: Record<string, any>;
    metrics?: Record<string, any>;
    extraDetails?: Record<string, any>;
    locationDetails?: Record<string, any>;
  };
}

const getAttributes = async (
  params: ParamsType['params']
): Promise<Record<string, any>> => {
  const { eventName, extraDetails, locationDetails } = params || {};
  const expectedEvents = [
    'portfolio_viewed',
    'showcase_viewed',
    'service_viewed',
    'follow_mimbboss',
  ];

  const {
    country_name,
    city,
    country_code,
    geohash,
    ip_address: ip,
    latitude: Latitude,
    longitude: Longitude,
  } = locationDetails || {};

  const locationAttributes = {
    viewercountry: [`${country_name || ''}`],
    viewercity: [`${city || ''}`],
    viewercountrycode: [`${country_code || ''}`],
    viewergeohash: [`${geohash || ''}`],
    viewerip: [`${ip || ''}`],
    Longitude,
    Latitude,
  };

  if (!eventName || !expectedEvents.includes(eventName))
    return { ...locationAttributes };

  const resp = await getShortenedUrl({ url: extraDetails?.url });
  const { url: shortenedUrl } = resp || { url: '' };

  const attributesMap = {
    portfolio_viewed: {
      lastPortfolioViewed: [`${shortenedUrl || ''}`],
      lastPortfolioViewedName: [`${extraDetails?.pageName || ''}`],
      lastPortfolioViewedSpecialty: [`${extraDetails?.specialty || ''}`],
      lastPortfolioViewedReviewScore: [
        `${extraDetails?.rating?.toString() || '0'}`,
      ],
    },
    showcase_viewed: {
      lastShowcaseViewed: [`${shortenedUrl || ''}`],
      lastShowcaseViewedImageURL: [`${extraDetails?.imageUrl || ''}`],
      lastShowcaseViewedTitle: [`${extraDetails?.showcaseName || ''}`],
      lastShowcaseViewedBusinessName: [`${extraDetails?.pageName || ''}`],
      lastShowcaseViewedReviewScore: [
        `${extraDetails?.rating?.toString() || '0'}`,
      ],
      lastShowcaseViewedPrice: [`${extraDetails?.price?.toString() || '0'}`],
      lastShowcaseViewedType: [`${extraDetails?.showcaseType || ''}`],
    },
    service_viewed: {
      lastServiceViewed: [`${shortenedUrl || ''}`],
      lastServiceViewedTitle: [`${extraDetails?.serviceName || ''}`],
      lastServiceViewedBusinessName: [`${extraDetails?.pageName || ''}`],
      lastServiceViewedReviewScore: [
        `${extraDetails?.rating?.toString() || '0'}`,
      ],
      lastServiceViewedPrice: [`${extraDetails?.price?.toString() || '0'}`],
    },
    follow_mimbboss: {
      lastMimbossFollowed: [`${extraDetails?.mimbbossName || ''}`],
      lastMimbossFollowedBusinessName: [
        `${extraDetails?.mimbbossBusinessName || ''}`,
      ],
      lastMimbossFollowedUsername: [`${extraDetails?.mimbbossUsername || ''}`],
    },
  };

  const eventAttributes = attributesMap[eventName] || {};

  return { ...locationAttributes, ...eventAttributes };
};

export const trackEvent = async ({
  eventName,
  params,
}: ParamsType): Promise<void> => {
  const { attributes = {}, query, metrics, extraDetails } = params || {};

  if (query?.run === 'warm') {
    return;
  }

  const locationDetails = await getUserLocation();
  const otherAttributes = await getAttributes({
    eventName,
    extraDetails,
    locationDetails,
  });

  if (eventName && typeof eventName === 'string') {
    await putEvent({
      eventName,
      attributes: { eventUserAttributes: otherAttributes, ...attributes },
      metrics,
      query,
    });

    if (engagedUserEvents.includes(eventName)) {
      await putEvent({
        eventName: 'engagedUser',
        attributes: { eventUserAttributes: otherAttributes, ...attributes },
        metrics,
        query,
      });
    }
  }
};

export const generateEventPayload = <T>(
  eventName: string,
  payload: T
): PinPointEvent<T> => {
  return {
    eventName,
    params: {
      attributes: payload,
    },
  };
};
