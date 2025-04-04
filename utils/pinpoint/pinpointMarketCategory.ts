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

