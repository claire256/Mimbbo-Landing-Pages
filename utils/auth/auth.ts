import { refreshUserToken } from './refreshTokens';

export const setHeaders = async () => {
  const tokens = await refreshUserToken();
  const token = tokens?.accessToken?.token;

  return {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };
};
