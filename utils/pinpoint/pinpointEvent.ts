import { getCookie, setCookie } from 'cookies-next';
import moment from 'moment';

import { customQueries, getUserLocation } from '../common';
import { pinpoint, pinPointOptions } from './pinpointAnalytics';
import {
  endpointId,
  pinpointSessionId,
  pinpointSessionStartTime,
  randomString,
} from './pinpointParams';
import { PutEventsCommand } from '@aws-sdk/client-pinpoint';

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
  let userId: string;

  const { eventUserAttributes = {}, ...restOfAttributes } = attributes;

  const endPointAttributes = customQueries({ query });
  const queries: Record<string, string> = {};
  Object.keys(endPointAttributes).forEach((key) => {
    queries[key] = endPointAttributes[key][0];
  });

  const savedUserId = getCookie('savedUserId');

 if(savedUserId) {
    userId = savedUserId as string;
  } else {
    const saveId = `user_${randomString()}`;
    setCookie('savedUserId', saveId);
    userId = saveId;
  }

  const params = await pinPointOptions();
  const endpointIdValue = (await endpointId()) || '';

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
            Attributes: params.EndpointRequest.Attributes,
            ...location,
            ChannelType: 'IN_APP',
            Demographic: params.EndpointRequest.Demographic,
            EffectiveDate: params.EndpointRequest.EffectiveDate,
            EndpointStatus: params.EndpointRequest.EndpointStatus,
            OptOut: params.EndpointRequest.OptOut,
          },
          Events,
        },
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
  const {locationDetails } = params || {};

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

  return { ...locationAttributes};
};

export const trackEvent = async ({
  eventName,
  params,
}: ParamsType): Promise<void> => {
  const { attributes = {}, query, metrics, extraDetails } = params || {};

  const locationDetails = await getUserLocation();
  const otherAttributes = await getAttributes({
    locationDetails,
  });

  if (eventName && typeof eventName === 'string') {
    await putEvent({
      eventName,
      attributes: { eventUserAttributes: otherAttributes, ...attributes },
      metrics,
      query,
    });

  }
};

