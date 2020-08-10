const bcrypt = require('bcrypt');
const connection = require('../../../lib/db');
const User = require('../../../lib/user');

const verifyEmail = (email) => {
  const regex = /^[a-z0-9_-]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  return regex.test(email);
};

const verifyName = (name) => {
  const regex = /^[a-zA-Z-éèâîûüêôöäï]{2,45}$/i;
  return regex.test(name);
};

const verifyPhonenumber = (phonenumber) => {
  const regex = /^(0|\+33)[1-9]( *[0-9]{2}){4}$/i;
  return regex.test(phonenumber);
};

const isLess18ThanYears = (date) => {
  const dateTime = new Date(date).getTime();
  const eighteenYearsAgo = new Date();

  eighteenYearsAgo.setFullYear(new Date().getFullYear() - 18);
  eighteenYearsAgo.setMinutes(0);
  eighteenYearsAgo.setSeconds(0);
  eighteenYearsAgo.setMilliseconds(0);
  return dateTime > eighteenYearsAgo.getTime();
};

export default async (req, res) => {
  const {
    email,
    password,
    firstname,
    lastname,
    phonenumber,
    dateofbirth
  } = req.body;
  const optinNewsletter = req.body.optinNewsletter === 'on';

  if (req.method === 'POST') {
    if (
      !email ||
      !password ||
      !firstname ||
      !lastname ||
      !phonenumber ||
      !dateofbirth
    ) {
      return res.status(401).json({ message: 'A field is missing' });
    }
    if (!verifyEmail(email) || email.length > 255 || email.length < 10) {
      return res.status(401).json({ message: 'Invalid email' });
    }
    if (password.length < 8) {
      // ajouter contrainte sur nb de chiffres et de lettres
      return res.status(401).json({ message: 'Password is too short' });
    }
    if (!verifyName(lastname) || !verifyName(firstname)) {
      return res.status(401).json({ message: 'Invalid firstname or lastname' });
    }
    if (!verifyPhonenumber(phonenumber)) {
      return res.status(401).json({ message: 'Invalid phone number' });
    }
    if (isLess18ThanYears(dateofbirth)) {
      return res
        .status(401)
        .json({ message: 'User musts be at least 18 years old' });
    }
    try {
      const results = await User.create(
        email,
        password,
        firstname,
        lastname,
        phonenumber,
        dateofbirth,
        optinNewsletter
      );
      return res.status(200).json({ sucess: results.insertId });
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  } else {
    return res.status(400).json({ message: 'Only method POST exists' });
  }
};
