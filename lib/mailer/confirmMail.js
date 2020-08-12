const confirmMail = (id, email) => {
  const host =
    process.env.NODE_ENV !== 'development'
      ? 'https://keyserviceshost.vercel.app'
      : 'http://localhost:5000';

  return {
    html: `
    <body>
    <h1>Confirmation of registration on our KeyServices website</h1>
    <p>Hello, you have registered on our KeyServices website.</p>
    <p>We now need you to confirm your registration by clicking on the link below</p>
    <a href="${host}/api/auth/confirm?id=${id}">Click here to confirm</a>

    <p>Coming soon to our services, the Keyserrvices team</p>
    </body>
    `,
    text: `Confirmation of registration on our KeyServices website\n
    Hello, you have registered on our KeyServices website\n
    We now need you to confirm your registration by clicking on the link below
    \nClick here to confirm
    \nComing soon to our services, the Keyserrvices team`
  };
};

export default confirmMail;
