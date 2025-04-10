import { API } from 'aws-amplify';
import { Buffer } from 'buffer';
import { setHeaders } from './auth/auth';

/**
 * @description parseJWT is a function used to decode the token into an object with keys for information regarding the token
 * @param {*} token token to be decoded
 * @returns JSON object with decoded token parameters
 */
export const parseJwt = (token) => {
  const base64Payload = token?.split('.')[1];
  const payload = Buffer.from(base64Payload, 'base64');

  return JSON.parse(payload.toString());
};

export const appEnv = process.env.NEXT_PUBLIC_APP_ENV || 'staging';

/**
 * getUserLocation function is a function used to fetch user
 * location details. This contains the geohash among other details
 * @returns Object User location details
 */
export const getUserLocation = async () => {
  const apiName = 'account';
  const headers = await setHeaders();
  const requestInfo = { headers };
  const path = '/me/where';

  try {
    const response = await API.get(apiName, path, requestInfo);
    return {
      ...response,
      city: response?.city?.includes('undefined') ? null : response?.city,
      geohash: response?.geohash?.slice(0, 4) || '',
    };
  } catch (error) {
    console.log(error);
  }
};

/**
 * getInitials is function that gets initials from a passed string separated with spaces
 * as delimiters
 * @param fullName
 * @returns Initials of passed string
 */
export const getInitials = (fullName) => {
  return fullName
    .split(' ')
    .map((namePart) => namePart.charAt(0))
    .join('')
    .toUpperCase();
};

export const getInitialScreenSize = () => {
  let screenWidth = 0;
  let screenHeight = 0;

  if (typeof window !== 'undefined') {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
  }

  return {
    width: screenWidth,
    height: screenHeight,
  };
};

/**
 * Filters the received object to include only acceptable keys.
 *
 * @param {Object} options - The options object.
 * @param {Object} options.query - The received object to be filtered.
 * @returns {Object} - A new object containing only acceptable keys and values.
 *
 * @example
 * // Usage example:
 * const receivedObject = {
 *   key1: 'value1',
 *   key2: 'value2',
 *   key4: 'value4',
 * };
 * const result = customQueries({ query: receivedObject });
 * console.log(result);
 */
export const customQueries = ({ query = {} }) => {
  const acceptableKeys = [
    'campaignId',
    'utm_source',
    'utm_medium',
    'utm_content',
    'utm_campaign',
    'from',
  ];
  const queryKeys = Object.keys(query);

  const filteredQuery = acceptableKeys.reduce((acc, key) => {
    if (queryKeys.includes(key)) {
      acc[key] = [`${query[key]}`];
    }
    return acc;
  }, {});

  return filteredQuery;
};


