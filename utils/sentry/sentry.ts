import * as Sentry from '@sentry/nextjs';

export const sentryErrorHandler = (error) => {
  Sentry.captureException(error);
};
