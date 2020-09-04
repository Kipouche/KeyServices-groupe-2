import nodemailer from 'nodemailer';

function Mailer() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'keyserviceshosting', // generated ethereal user
      pass: 'Bouboule18' // generated ethereal password
    }
  });

  this.sendMail = async (email, subject, html, text) => {
    const mailOptions = {
      from: 'keyserviceshosting@gmail.com',
      to: email,
      subject,
      text,
      html
    };

    // send mail with defined transport object
    try {
      const info = await transporter.sendMail(mailOptions);
      return info;
    } catch (error) {
      return error;
    }
  };

  this.sendContactMail = async (subject, html) => {
    const mailOptions = {
      from: 'keyserviceshosting@gmail.com',
      to: 'keyservicespr@gmail.com',
      subject,
      html
    };

    // send mail with defined transport object
    try {
      const info = await transporter.sendMail(mailOptions);
      return info;
    } catch (error) {
      return error;
    }
  };
}

module.exports = new Mailer();
