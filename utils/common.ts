import { API } from 'aws-amplify';
import { Buffer } from 'buffer';
import { cva } from 'class-variance-authority';
import moment from 'moment';
import ngeohash from 'ngeohash';

import getSymbolFromCurrency from 'currency-symbol-map';
import { setHeaders } from './auth/auth';
import { sentryErrorHandler } from './sentry/sentry';
/**
 * Retrieves the currency symbol based on the provided currency code.
 *
 * @param {string} currency - The currency code for which to retrieve the symbol.
 * @return {string} The currency symbol if found, otherwise the currency code itself.
 */
export const getCurrencySymbol = (currency: string) => {
  return getSymbolFromCurrency(currency) || currency;
};

export const updateStateObj = <T>(
  key: keyof T,
  value: any,
  setState: React.Dispatch<React.SetStateAction<T>>
) => {
  setState((prevState) => ({
    ...prevState,
    [key]: value,
  }));
};


export const cleanItemType = (itemType: string) => {
  let result = itemType.replace('eye', '');
  result = result.replace('style', '').toLowerCase().trim();

  return result;
};
export const cleanItemTypeLabel = (itemType: string) => {
  let result = cleanItemType(itemType);

  if (result === 'lashes') {
    result = 'Lash & Brow';
  }

  if (result === 'make up') {
    result = 'makeup';
  }

  return result;
};

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
 * @description will generate an s3 url
 * @param {string} key key to be used for s3 url
 * @returns {string} s3 url
 */

/**
 * @description capitalizeFirstLetter is used to capitalize the first later of a given string
 * @param {String} string string of characters
 * @returns {String} returns a string whose first later is capitalized
 */
export const capitalizeFirstLetter = (string = '') => {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
};

// default month - current month
const defaultMonth = moment().month();

/**
 * @description getMonth is a function used to generate days of the month whose
 * number has been based as the month. The return matrix will contain day objects for each day
 * @param {number} month number representation for a month eg 1 for january
 * @returns {array} month matrix including days for the current month and months
 * before and after the current month.
 * NB: Days of other months that overlap into the current month
 */
export const getMonth = (month = defaultMonth) => {
  // Round down the month number
  month = Math.floor(month);

  const year = moment().year();
  // number representation for the first day of the month
  const firstDayOfTheMonth = moment(new Date(year, month, 1)).day();

  let monthDayCount = 0 - firstDayOfTheMonth;

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      monthDayCount++;
      return moment(new Date(year, month, monthDayCount));
    });
  });

  return daysMatrix;
};

export const roundTwoDecimals = (amount) => {
  return Number(Number(amount)?.toFixed(2));
};

export const taxCalculator = ({ rate, totalCost }) => {
  if (rate) {
    const totalTax = rate * totalCost;
    return roundTwoDecimals(totalTax);
  } else {
    return 0;
  }
};

export const getCurrencySign = (currency) => {
  let sign;
  switch (currency?.toUpperCase()) {
    case 'USD':
      sign = '$';
      break;
    // case 'EUR':
    //   sign = '€';
    //   break;
    // case 'AUD':
    //   sign = 'A$';
    //   break;

    // case 'UGX':
    //   sign = 'USh';
    //   break;
    // case 'KRW':
    //   sign = '₩';
    //   break;
    default:
      sign = '$';
  }

  return sign;
};

export const hoursMinutesConvertor = (time) => {
  let result = '';
  const hours = parseInt((Number(time) / 60).toString());
  const minutes = Number(time) / 60 === 0 ? 0 : Number(time) % 60;

  if (minutes) {
    result = hours
      ? hourPluralize(hours) + ' ' + minutes + ' mins'
      : minutes + ' mins';
    return result;
  }

  return hourPluralize(hours);
};

const hourPluralize = (hours) => {
  return hours > 1 ? `${hours} hrs` : `${hours} hr`;
};

export const durationConvertor = (time) => {
  let result = '';
  const hours = parseInt((Number(time) / 60).toString());
  const minutes = Number(time) / 60 === 0 ? 0 : Number(time) % 60;

  if (minutes) {
    result = hours ? `${hours}h:${minutes}min` : `${minutes}min`;
    return result;
  }

  return `${hours}h`;
};

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

/**
 * extractNames function is used to get first and last names from a provided string delimited by
 * spaces.
 * If only one name, it will be duplicated as the last name
 * If more than 2 names the last name and other etra strings will be treated as lastname
 * @param fullName
 * @returns object with names
 */
export const extractNames = (fullName) => {
  const names = fullName?.split(' ') || [];

  if (names.length === 0) return {};

  // eslint-disable-next-line prefer-const
  let [firstName, lastName, ...others] = names;
  let otherNames = '';

  if (!lastName) {
    lastName = firstName;
  }

  if (others?.length > 0) {
    otherNames = others.join(' ');

    lastName = `${lastName} ${otherNames}`;
  }

  return {
    firstName,
    lastName,
    otherNames,
  };
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

export const removeSpecialCharacters = (charSequence: string): string => {
  const specialCharactersRegex = /[^a-zA-Z0-9_-]/g;

  return charSequence.replace(specialCharactersRegex, '');
};

export const getGeohash = ({ lat, long }) => {
  if (lat && long) {
    return ngeohash.encode(lat, long);
  }
  return '';
};

export const highlightKeywords = (keywords, text) => {
  if (!Array.isArray(keywords)) {
    keywords = [keywords];
  }

  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');

  return text?.replace(regex, `<span class="bg-yellow-300">$1</span>`);
};

/**
 * hasMoreData is function to check ig there are more pages to load based on
 * the current page, size and total
 * @param object
 * @returns boolean
 */
export const hasMoreData = ({ size, total, current }) => {
  const totalPages = total / size;
  return current < totalPages;
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

/**
 * Retrieves a shortened URL from the specified long URL.
 *
 * @param {string} url - The long URL to be shortened
 * @return {Promise<string>} The shortened URL
 */

export const getShortenedUrl = async ({ url, queryParams = {}, ttl = 90 }) => {
  const queryString = new URLSearchParams(queryParams).toString();
  let destination = '';

  if (queryString) {
    destination = `${url}?${queryString}`;
  } else {
    destination = url;
  }

  const apiName = 'url-signer';
  const headers = await setHeaders();
  const requestInfo = { headers, body: { destination, ttl } };
  const path = '/shorten';

  try {
    const response = await API.post(apiName, path, requestInfo);

    return response || {};
  } catch (error) {
    console.log(error);
    sentryErrorHandler(error);
  }
};

/**
 * Determines the media type based on the file extension of the provided URL.
 *
 * @param {string} url - The URL to determine the media type for.
 * @return {object} An object containing the URL and the determined media type.
 */
export const determineMediaType = (url) => {
  // eslint-disable-next-line no-useless-escape
  const fileExtension = url.split('.').pop().split(/\#|\?/)[0];

  // supported media types
  const mediaTypeMap = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    svg: 'image/svg+xml',
    mp4: 'video/mp4',
    webm: 'video/webm',
  };

  const mediaType = mediaTypeMap[fileExtension] || 'unknown';

  return {
    url: url,
    mediaType: mediaType,
  };
};

/**
 * isEmptyObject function is used to check whether an object is empty i.e has no keys,
 * undefined or null
 * @param {Object} object - The object to be checked for keys, null or undefined
 * @returns {Boolean} - returns True or false
 */
export const isEmptyObject = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

/**
 * isAlphaNumeric function is used to check the string of characters contains numbers, letters or both
 * @param {string} text
 * @returns boolean
 */
export const isAlphaNumeric = (text) => {
  if (typeof text !== 'string' || text?.length === 0) {
    return false;
  }
  const regEx = /^[0-9a-zA-Z]+$/;
  return regEx.test(text);
};

export const generateRelativeTime = (date: string) => {
  const relativeTime = moment(date).fromNow();

  if (relativeTime.includes('hour')) {
    return relativeTime
      .replace('in ', '')
      .replace(' hours', 'hrs')
      .replace(' hour', ' hr');
  } else if (relativeTime.includes('minute')) {
    return relativeTime
      .replace('in ', '')
      .replace(' minutes', 'min')
      .replace(' minute', ' min');
  } else if (relativeTime.includes('day')) {
    return relativeTime.replace('in ', '');
  } else if (relativeTime.includes('second')) {
    return relativeTime
      .replace('in ', '')
      .replace(' seconds', 'sec')
      .replace(' second', 'sec');
  } else {
    return relativeTime;
  }
};

/**
 * Sorts an array of dates in ascending or descending order based on the provided order parameter.
 *
 * @param {Array<Object>} datesArray - The array of dates to be sorted.
 * @param {string} [order='ascending'] - The order in which the dates should be sorted. Valid values are 'ascending' and 'descending'.
 * @returns {Array<Object>} - The sorted array of dates.
 * @throws {Error} - If the order parameter is not 'ascending' or 'descending'.
 * @throws {Error} - If any of the dates in the array are not in a valid format.
 */
export const sortDates = (datesArray, order = 'ascending') => {
  const validOrders = ['ascending', 'descending'];

  if (!validOrders.includes(order)) {
    throw new Error(
      `Invalid order specified. Choose 'ascending' or 'descending'.`
    );
  }

  const sortedDates = datesArray.sort((data1, data2) => {
    const momentDate1 = moment(data1.date);
    const momentDate2 = moment(data2.date);

    if (!momentDate1.isValid() || !momentDate2.isValid()) {
      throw new Error('Invalid date format encountered.');
    }

    if (order === 'ascending') {
      return momentDate1.diff(momentDate2);
    } else {
      return momentDate2.diff(momentDate1);
    }
  });

  return sortedDates;
};

/**
 * Combines a given date and time string into a single ISO 8601 formatted date-time string.
 *
 * @param {Date | null} date - The date to combine with the time string.
 * @param {string} timeString - The time string to combine with the date.
 * @throws {Error} If the time string is invalid or not properly formatted.
 * @throws {Error} If the time part does not contain valid hours and minutes.
 * @returns {string} The combined date-time string in ISO 8601 format.
 */
export const combineDateAndTimeString = (date, timeString) => {
  if (typeof timeString !== 'string' || !timeString.trim()) {
    throw new Error('Invalid time string provided.');
  }

  const [timePart, ampm] = timeString.trim().split(/(?=[APM])/i);

  if (!timePart || !ampm) {
    throw new Error('Time string is not properly formatted.');
  }

  const timeMatches = timePart.match(/\d{1,2}/g);

  if (!timeMatches || timeMatches.length < 2) {
    throw new Error('Time part does not contain valid hours and minutes.');
  }

  let [hours, minutes] = timeMatches;

  if (ampm.toUpperCase() === 'P' && parseInt(hours, 10) < 12) {
    hours = (parseInt(hours, 10) + 12).toString();
  } else if (ampm.toUpperCase() === 'A' && hours === '12') {
    hours = '00';
  }

  hours = hours.padStart(2, '0');
  minutes = minutes.padStart(2, '0');

  const dateTimeString = `${date?.getFullYear()}-${(date?.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}T${hours}:${minutes}:00`;

  const combinedDateTime = new Date(dateTimeString);

  return combinedDateTime.toISOString();
};

export const isValidEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(email);
};

export const isRequired = (fields) => {
  const fieldErrors = {};

  for (const key in fields) {
    const value = fields[key];
    if (!value || value?.toString()?.trim()?.length === 0) {
      fieldErrors[key] = `${key} is required`;
    }
  }

  return fieldErrors;
};

export const typesMap: any = {
  hair: 'hair',
  makeup: 'makeup',
  nails: 'nails',
  skin: 'skin',
  lashes: 'lashes',
};

export const getTypeTheme = cva('theme', {
  variants: {
    intent: {
      hair: ['bg-mimbbo-theme-hair', 'text-white'],
      makeup: ['bg-mimbbo-theme-makeup', ' text-white'],
      nails: ['bg-mimbbo-theme-nails', ' text-white'],
      skin: ['bg-mimbbo-theme-skin', ' text-white'],
      lashes: ['bg-mimbbo-theme-lashes', ' text-white'],
    },
  },
  defaultVariants: {
    intent: 'hair',
  },
});


export const formatPrice = (price: number | string) => {
  let formattedPrice = price;

  if (typeof formattedPrice === 'string') {
    formattedPrice = parseFloat(formattedPrice);
  }

  const isFloat = formattedPrice % 1 !== 0;

  if (!isFloat) {
    return formattedPrice;
  }

  return price?.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const stringifyPrice = (price: number | string) => {
  return price?.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const typeTheme = (type: string) =>
  getTypeTheme({ intent: typesMap[type] });

const timeUnits = (time) => {
  if (time === 60) return 'h';
  if (time > 60) return 'hrs';
  if (time < 60) return 'min';
};

export const convertTime = (time) => {
  if (time) {
    const covertTime = time / 60;
    const newTime = covertTime?.toString().split('.');
    if (newTime?.length > 1) {
      if (newTime[0] === '0') {
        return `${30}min`;
      }
      return `${newTime[0]}h:${30}min`;
    } else {
      return `${newTime[0]}${timeUnits(time)}`;
    }
  } else {
    throw new Error('Time is required');
  }
};

export const saveToSessionStorage = (
  key: string,
  value: any,
  config?: {
    isString?: boolean;
  }
) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(
      key,
      config?.isString ? value : JSON.stringify(value)
    );
  }
};

export const removeFromSessionStorage = <T>(key: T) => {
  if (typeof window !== 'undefined') {
    if (typeof key === 'string') {
      sessionStorage.removeItem(key);
    } else if (typeof key === 'object' && key !== null && Array.isArray(key)) {
      key.forEach((k) => {
        sessionStorage.removeItem(k);
      });
    }
  }
};

export const getFromSessionStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
};
export const truncateString = (str = '', n, ellipse = false) => {
  return str.length > n
    ? ellipse
      ? `${str.slice(0, n)}...`
      : str.slice(0, n - 1)
    : str;
};

export const manageSessionStorage = ({
  key,
  value,
  isString,
}: {
  key: string;
  value?: any;
  isString?: boolean;
}) => {
  if (value !== undefined) {
    saveToSessionStorage(key, value, { isString });
  } else {
    removeFromSessionStorage(key);
  }
};

export const isValidURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

export const getShowcaseType = ({ type = '' }) => {
  let cleanedType = type.toLowerCase();

  if (cleanedType.includes('hair')) {
    cleanedType = 'hairstyle';
  } else if (cleanedType.includes('makeup')) {
    cleanedType = 'makeup';
  } else if (cleanedType.includes('lash')) {
    cleanedType = 'eyelashes';
  } else if (cleanedType.includes('skin')) {
    cleanedType = 'skin';
  } else if (cleanedType?.includes('nail')) {
    cleanedType = 'nails';
  }

  return cleanedType;
};

export const cleanLocationLabel = (location: string) => {
  return location.toLocaleLowerCase().replace(', united states', '');
};

export function getDynamicTimeElapsed(
  startDate: string | Date | moment.Moment
): string {
  const now = moment();
  const start = moment(startDate);

  const years = now.diff(start, 'years');
  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;

  const months = now.diff(start, 'months');
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;

  const days = now.diff(start, 'days');
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;

  const hours = now.diff(start, 'hours');
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;

  const minutes = now.diff(start, 'minutes');
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

  const seconds = now.diff(start, 'seconds');
  return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
}
