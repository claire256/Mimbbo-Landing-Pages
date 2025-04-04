export const { NODE_ENV = 'prod' } = process.env;
export const IS_DEV = NODE_ENV !== 'prod';
export const SITE_NAME = 'MIMBBO';

const auth_object = {
  dev: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_xkMDNGh7e',
    userPoolWebClientId: '45a8e5ckp11h8sj5v661bv59jo',
    mandatorySignIn: false,
    IdentityPoolId: 'us-east-1:51091022-83e9-4da5-9232-65363ca97d17',
  },
  staging: {
    //**Default */
    region: 'us-east-1',
    userPoolId: 'us-east-1_Ca3NAyF1F',
    userPoolWebClientId: '2ol4mrq9ip6te3ctq7n7ncjne4',
    mandatorySignIn: false,
    IdentityPoolId: 'us-east-1:15825e95-5d27-4b38-8bbf-aae6c64dbfa5',
  },
  prod: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_FkPRM1VBD',
    userPoolWebClientId: '2mv2emhkb733slvnpdfuh1l3g5',
    mandatorySignIn: false,
    IdentityPoolId: 'us-east-1:1b05387b-c38d-438f-99f6-f6bc4cd79bce',
  },
};

const getAPIEndpoints = (env) => {
  env === 'prod' ? (env = '') : (env = `.${env}`);
  const obj = {
    account: `https://account.api${env}.mimbbo.com`,
  
  };

  return obj;
};

const getAssetEndpoints = (env: string) => {
  env === 'prod' ? (env = '') : (env = `.${env}`);

  const obj = {
    cdn: `https://cdn${env}.mimbbo.com/`,
  };

  return obj;
};

const Config = {
    auth: {},
    endpoints: {},
    itunesAppId: '',
    assets: {},
    env: '',
    analytics: {},
    stripePublishableKey: '',
    pinpointAppId: '',
    appName: 'Mimbbo Landing Page',
    slug: '',
  };

  const configuration = () => {
    const appEnv = process.env.NEXT_PUBLIC_APP_ENV
      ? process.env.NEXT_PUBLIC_APP_ENV
      : 'staging';
    const stripePublishableKey =
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';
    const pinpointAppId =
      appEnv === 'prod'
        ? '87c515e341cf4ca4885178343dbd7661'
        : 'd4b2fb4e0e584eb6af8da102065ce8af';
  
    const slug = appEnv === 'prod' ? 'mimbbo-app' : `mimbbo-${appEnv}`;
    Config.auth = auth_object[appEnv];
    Config.endpoints = getAPIEndpoints(appEnv);
    Config.itunesAppId = appEnv === 'prod' ? '1602788926' : `1638154372`;
    Config.assets = getAssetEndpoints(appEnv);
    Config.env = appEnv;
    Config.pinpointAppId = pinpointAppId;
    Config.slug = slug;
  };
  
  configuration();

  export default Config;