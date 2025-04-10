import { Auth } from 'aws-amplify';
import { getCookie, hasCookie, setCookie } from 'cookies-next';

import { parseJwt } from '../common';
import { getAnonymousToken } from './anonymousAuth';

export const refreshUserToken = async () => {
  const userCookieData = getCookie('user') ?? '';
  let user: any = null;

  if (userCookieData) {
    user = JSON.parse(
      (typeof userCookieData === 'string' && userCookieData) || ''
    );
  }

  let currentTokens = user?.tokens || null;
  const currentTime = new Date().getTime() / 1000;

  if (currentTokens === null) {
    const anonymousUserData = hasCookie('anonymous')
      ? getCookie('anonymous')
      : '';
    const data =
      anonymousUserData !== '' ? JSON.parse(anonymousUserData || '') : null;
    const anonymousUser = data?.anonymousUserToken ? data : null;
    if (anonymousUser?.anonymousUserToken?.accessToken) {
      const tokenDetails = parseJwt(
        anonymousUser.anonymousUserToken.accessToken
      );

      if (currentTime > tokenDetails.exp - 60) {
        const anonymousUserToken = await getAnonymousToken();

        setCookie(
          'anonymous',
          JSON.stringify({
            anonymousUserToken,
            location: anonymousUserToken?.location,
          }),
          {
            path: '/',
            maxAge: 3600, // Expires after 1hr
            sameSite: 'lax',
          }
        );

        return {
          accessToken: {
            token: anonymousUserToken.accessToken,
          },
        };
      }
      return {
        accessToken: {
          token: anonymousUser.anonymousUserToken.accessToken,
        },
      };
    } else {
      const anonymousUserToken = await getAnonymousToken();

      setCookie(
        'anonymous',
        JSON.stringify({
          anonymousUserToken,
          location: anonymousUserToken?.location,
        }),
        {
          path: '/',
          maxAge: 3600, // Expires after 1hr
          sameSite: 'lax',
        }
      );

      return {
        accessToken: {
          token: anonymousUserToken.accessToken,
        },
      };
    }
  }

  const accessTokenExp = currentTokens.accessToken.exp;

  // check if access token expires in 60secs or expired
  if (currentTime > accessTokenExp - 60) {
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      const currentSession = cognitoUser.signInUserSession;

      const promise = new Promise((resolve, reject) => {
        cognitoUser.refreshSession(
          currentSession.refreshToken,
          (err, session) => {
            if (err) reject(err);

            const { idToken, refreshToken, accessToken } = session;
            const newTokens = {
              accessToken: {
                token: accessToken.jwtToken,
                exp: accessToken.payload.exp,
              },
              idToken: { token: idToken.jwtToken, exp: idToken.payload.exp },
              refreshToken,
            };
            setCookie(
              'user',
              JSON.stringify({
                ...(user || {}),
                tokens: {
                  accessToken: newTokens.accessToken,
                  refreshToken: newTokens.refreshToken,
                },
              }),
              {
                path: '/',
                maxAge: 3600, // Expires after 1hr
                sameSite: 'lax',
              }
            );
            currentTokens = newTokens;
            resolve(newTokens);
          }
        );
      });
      await promise;

      return currentTokens;
    } catch (e) {
      console.log('Unable to refresh Token', e);
    }
  } else {
    return {
      accessToken: {
        token: currentTokens.accessToken.token,
      },
    };
  }
};
