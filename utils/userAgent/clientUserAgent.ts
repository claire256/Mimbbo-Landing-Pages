export const getClientUserAgent = () => {
    if (typeof window !== 'undefined') {
      return window.navigator.userAgent;
    }
  
    return null;
  };
  