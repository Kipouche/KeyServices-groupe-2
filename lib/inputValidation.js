function InputValidation() {
  this.verifyEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  this.verifyName = (name) => {
    const regex = /^[a-zA-Z-éèâîûüêôöäï]{2,45}$/i;
    return regex.test(name);
  };

  this.verifyCompleteName = (name) => {
    const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    return regex.test(name);
  };

  this.verifyAddress = (address) => {
    const addressArray = address.split(' ');
    const numberAddress = parseInt(addressArray[0], 10);
    if (Number.isInteger(numberAddress)) {
      const regex = /^[a-zA-Z0-9-éèâîûüêôöäï ]{2,250}$/i;
      return regex.test(address);
    }
    return false;
  };

  this.verifyInteger = (integer) => {
    return Number.isInteger(integer);
  };

  this.verifyId = (id) => {
    const regex = /^[0-9]{1,11}$/i;
    return regex.test(id);
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
