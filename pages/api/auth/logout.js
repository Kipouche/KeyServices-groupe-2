import cookie from 'cookie';

export default async (req, res) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('auth', '', {
      maxAge: -1,
      path: '/',
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict'
    })
  );

  res.writeHead(302, { Location: '/login' });
  res.end();
  //return res.status(200).json({ message: 'Disconnected' });
};
