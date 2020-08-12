const confirmMail = (id, email) => {
  const host =
    process.env.NODE_ENV !== 'development'
      ? 'https://keyserviceshost.vercel.app'
      : 'http://localhost:5000';

  return `<html>
        <a href="${host}/api/auth/confirm?id=${id}">Click here to confirm</a>
    </html>`;
};

export default confirmMail;
