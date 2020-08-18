const convertTimeGMT2 = (date) => {
  const dateGMT2 = new Date(date);
  dateGMT2.setUTCMinutes(dateGMT2.getUTCMinutes() + 60);
  return dateGMT2;
};

export default convertTimeGMT2;
