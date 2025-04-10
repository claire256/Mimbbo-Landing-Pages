import Config from './config';

export const auth_object = Config.auth as any;
const endpoints = Config.endpoints;

export const apiConfig = {
  endpoints: Object.keys(endpoints).map((key) => {
    return { name: key, endpoint: endpoints[key] };
  }),
};

export const pinpointAppId = Config.pinpointAppId;
