import { API } from 'aws-amplify';

import Config from '../Config/config';

export const getAnonymousToken = async () => {
  const auth = Config.auth;
  const clientId = auth.userPoolWebClientId;
  const userPoolId = auth.userPoolId;

  const init = {
    queryStringParameters: {
      clientId,
      userPoolId,
    },
  };

  try {
    const resp = await API.get('account', '/user/anonymous', init);
    return resp;
  } catch (error) {
    return error;
  }
};
