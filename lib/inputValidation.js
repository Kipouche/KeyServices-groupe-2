function InputValidation() {
  this.verifyEmail = (email) => {
    const regex = /^[a-z0-9_-]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    return regex.test(email);
  };

  this.verifyName = (name) => {
    const regex = /^[a-zA-Z-éèâîûüêôöäï]{2,45}$/i;
    return regex.test(name);
  };

  this.verifyPhonenumber = (phonenumber) => {
    const regex = /^(0|\+33)[1-9]( *[0-9]{2}){4}$/i;
    return regex.test(phonenumber);
  };

  this.isLess18ThanYears = (date) => {
    const dateTime = new Date(date).getTime();
    const eighteenYearsAgo = new Date();

    eighteenYearsAgo.setFullYear(new Date().getFullYear() - 18);
    eighteenYearsAgo.setMinutes(0);
    eighteenYearsAgo.setSeconds(0);
    eighteenYearsAgo.setMilliseconds(0);
    return dateTime > eighteenYearsAgo.getTime();
  };
}

module.exports = new InputValidation();
