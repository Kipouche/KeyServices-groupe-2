import nodemailer from 'nodemailer';

function Mailer() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'keyserviceshosting@gmail.com', // generated ethereal user
      pass: 'vxnwegdrlhuqovst' // generated ethereal password
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
      to: 'prkeyservices@gmail.com',
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
