import { getCookie } from 'cookies-next';
import moment from 'moment';
import momentTz from 'moment-timezone';

import { sentryErrorHandler } from '../sentry/sentry';
import { getInitialScreenSize } from '../common';
import Config from '../Config/config';
import { getClientUserAgent } from '../userAgent/clientUserAgent';
import { parseUserAgent } from '../userAgent/parseUserAgent';

const { width, height } = getInitialScreenSize();
const deviceData = parseUserAgent(getClientUserAgent());

export const appName = Config.appName;
export const appId = Config.slug;
export const appVersion = '1.0.0';
export const screenSize = `${width}x${height}`;
export const deviceName = deviceData.browser;
export const platform = deviceData.os;
export const model = deviceData.deviceType;
export const make = deviceData.browser;
export const osVersion = deviceData.osVersion;
export const manufacturer = deviceData.manufacturer;
export const timezone = momentTz.tz.guess();
export const locale = moment.locale();
export const effectiveDate = moment().toISOString();

export const endpointId = async () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      let deviceId = await localStorage.getItem('endpointId');

      if (!deviceId) deviceId = localStorage.getItem('deviceId') || '';
      if (!deviceId) deviceId = randomString();

      await localStorage.setItem('endpointId', deviceId);
      await localStorage.setItem('address', `address_${deviceId}`);

      return deviceId;
    } catch (error) {
      await localStorage.setItem('endpointId', randomString());

      const deviceId = await localStorage.getItem('endpointId');

      return deviceId;
    }
  }
};


export const randomString = () => {
  return (
    Math.random().toString(36).substring(2, 30) +
    Math.random().toString(36).substring(2, 30) +
    Math.random().toString(36).substring(2, 30)
  );
};

export const pinpointSessionId = ({ isNewSession = false }) => {
  try {
    if (isNewSession) {
      const sessionId = `session_${randomString()}`;
      localStorage.setItem('pinpointSession', sessionId);

      localStorage.setItem('sessionStartTime', moment().toISOString());

      return sessionId;
    }

    let sessionId = localStorage.getItem('pinpointSession');

    if (!sessionId) sessionId = `session_${randomString()}`;

    localStorage.setItem('pinpointSession', sessionId);

    return sessionId;
  } catch (error) {
    console.log('error setting pinpoint session in local storage');

    console.log(error);

    sentryErrorHandler(error);

    return `session_${randomString()}`;
  }
};

export const pinpointSessionStartTime = () => {
  try {
    let startTime = localStorage.getItem('sessionStartTime');

    if (!startTime) startTime = moment().toISOString();

    localStorage.setItem('sessionStartTime', startTime);

    return startTime;
  } catch (error) {
    console.log('error setting pinpoint start time in local storage');

    console.log(error);

    sentryErrorHandler(error);

    return moment().toISOString();
  }
};
