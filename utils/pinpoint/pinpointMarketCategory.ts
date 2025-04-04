import moment from 'moment';

const calculateDaysDifference = (currentDate, signupDate) => {
  return currentDate.diff(signupDate, 'days');
};

const isAlumni = (appts) => {
  let alumni = false;
  const currentDate = moment();

  const sortedAppts = appts?.sort((a, b) =>
    moment(b?.details.appDate).diff(moment(a.details.appDate))
  );

  if (
    calculateDaysDifference(
      currentDate,
      moment(sortedAppts[0]?.details?.appDate)
    ) >= 90
  ) {
    alumni = true;
  }

  return alumni;
};

const getMarketSegment = ({ action, resistor = false }) => {
  if (resistor) {
    return ['resistor'];
  }

  if (action === '_userauth.sign_up') {
    return ['explorer'];
  }

  const segments: string[] = [];

  if (action === 'showcase_viewed' || action === 'service_viewed') {
    segments.push('window shopper');
  } else if (action === 'portfolio_viewed') {
    segments.push('peruser');
  }

  return segments;
};

export const getMarketCategory = ({ user, action }) => {
  if (!user) return {};

  const { createdOn } = user?.details || {};
  const currentDate = moment();
  const signupDate = moment(createdOn, 'M-D-YYYY');
  const daysDifference = calculateDaysDifference(currentDate, signupDate);
  const daysText = `${daysDifference}`;
  let appts = [];

  const savedAppts = localStorage.getItem('appts');
  if (savedAppts && savedAppts !== 'undefined' && savedAppts !== null) {
    appts = JSON.parse(savedAppts);
  }

  if (appts?.length > 0) {
    if (isAlumni(appts)) {
      return {
        marketSegment: ['alumni'],
        daysSinceRegistration: [daysText],
      };
    }

    return {
      marketSegment: ['trailblazer'],
      daysSinceRegistration: [daysText],
    };
  }

  if (daysDifference < 1) {
    return {
      marketSegment: getMarketSegment({ action }),
      daysSinceRegistration: [daysText],
    };
  } else if (daysDifference < 3) {
    return {
      marketSegment: getMarketSegment({ action, resistor: false }),
      daysSinceRegistration: [daysText],
    };
  } else if (daysDifference >= 3) {
    return {
      marketSegment: getMarketSegment({ action, resistor: true }),
      daysSinceRegistration: [daysText],
    };
  }
};
