function ConvertTime() {
  this.timeToGMT2 = (date) => {
    const dateGMT2 = new Date(date);
    dateGMT2.setUTCMinutes(dateGMT2.getUTCMinutes() + 120);
    return dateGMT2;
  };

  this.getISOTime = () => {
    let date = new Date();

    date.setUTCMinutes(date.getUTCMinutes() + 120);
    date = date.toISOString();
    return date;
  }
}

export default new ConvertTime();
