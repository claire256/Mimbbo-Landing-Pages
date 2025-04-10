import { auth_object, pinpointAppId } from '../Config/amplify-auth-config';
import {
  PinpointClient,
  UpdateEndpointCommand,
  UpdateEndpointCommandInput,
} from '@aws-sdk/client-pinpoint';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import {
  appId,
  appName,
  appVersion,
  effectiveDate,
  endpointId,
  locale,
  make,
  model,
  osVersion,
  platform,
  screenSize,
  timezone,
} from './pinpointParams';

export { pinpointAppId } from '../Config/amplify-auth-config';

const region = auth_object.region;
const credentials = fromCognitoIdentityPool({
  clientConfig: { region },
  identityPoolId: auth_object.IdentityPoolId,
});                            

export const pinpoint = new PinpointClient({
  region,
  credentials,
});

export const opts = {
  ApplicationId: pinpointAppId,
};

// Helper to get address from endpoint
export const getAddress = async () => {
  const id = await endpointId();
  return `address_${id}`;
};

// Endpoint request configuration
export const endpointRequest = {
  ChannelType: 'IN_APP',
  Address: '',
  Attributes: {
    screenSize: [screenSize],
    appId: [appId],
    appName: [appName],
    appVersion: [appVersion],
  },
  Demographic: {
    AppVersion: appVersion,
    Locale: locale,
    Make: make,
    Model: model,
    Platform: platform,
    PlatformVersion: osVersion,
    Timezone: timezone,
  },
  EffectiveDate: effectiveDate,
  EndpointStatus: 'ACTIVE',
  OptOut: 'NONE',
};

// Update the Address field once the address is fetched
getAddress().then((address) => (endpointRequest.Address = address));

// Function to get Pinpoint options for a user
export const pinPointOptions = async (): Promise<UpdateEndpointCommandInput> => {
  const Address = await getAddress();

  return {
    ...opts,
    EndpointRequest: {
      ...endpointRequest,
      Address,
    },
    EndpointId: await endpointId(),
  };
};

