import sha256 from 'sha256';

import User from '../../../lib/user';
import InputValidation from '../../../lib/inputValidation';
import Mailer from '../../../lib/mailer/mailer';
import confirmMail from '../../../lib/mailer/confirmMail';

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
    if (!InputValidation.verifyEmail(email) || email.length > 255 || email.length < 10) {
      return res.status(401).json({ message: 'Invalid email' });
    }
    if (password.length < 8) {
      // ajouter contrainte sur nb de chiffres et de lettres
      return res.status(401).json({ message: 'Password is too short' });
    }
    if (!InputValidation.verifyName(lastname) || !InputValidation.verifyName(firstname)) {
      return res.status(401).json({ message: 'Invalid firstname or lastname' });
    }
    if (!InputValidation.verifyPhonenumber(phonenumber)) {
      return res.status(401).json({ message: 'Invalid phone number' });
    }
    if (InputValidation.isLess18ThanYears(dateofbirth)) {
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
      const token = sha256(results.insertId + process.env.SECRET_SHA);
      const mailBody = confirmMail(results.insertId, token, firstname);
      Mailer.sendMail(email, 'Confirmation of registration for KeyServices', mailBody.html, mailBody.text);
      return res.status(200).json({ sucess: results.insertId });
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  } else {
    return res.status(400).json({ message: 'Only method POST exists' });
  }
};
