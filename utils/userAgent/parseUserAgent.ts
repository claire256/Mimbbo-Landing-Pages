import platform from 'platform';

export const parseUserAgent = (userAgentString) => {
  const info = platform.parse(userAgentString);

  return {
    os: info.os.toString(),
    osVersion: info.os.version,
    browser: info.name,
    version: info.version,
    deviceType: info.product || 'desktop',
    manufacturer: info.manufacturer,
  };
};

export default parseUserAgent;
