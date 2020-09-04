import InputValidation from '../../../lib/inputValidation';
import Mailer from '../../../lib/mailer/mailer';

export default async (req, res) => {
  const { email, name, subject, message } = req.body;

  if (req.method === 'POST') {
    if (!email || !name || !subject || !message) {
      return res.status(401).json({ message: 'A field is missing' });
    }
    if (
      !InputValidation.verifyEmail(email) ||
      email.length > 255 ||
      email.length < 10
    ) {
      return res.status(401).json({ message: 'Invalid email' });
    }
    if (!InputValidation.verifyName(name)) {
      return res.status(401).json({ message: 'Invalid name' });
    }
    try {
      Mailer.sendContactMail(
        email,
        subject,
        `<html><body><p>Bonjour KeyServices Contact, vous avez un nouveau message de : ${name}, voici son adresse : ${email} et son message : ${message}</p></body></html>`
      );
      return res.status(200).json({ sucess: 'ok' });
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  } else {
    return res.status(400).json({ message: 'Only method POST exists' });
  }
};
