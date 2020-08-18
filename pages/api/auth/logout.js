import cookie from 'cookie';

export default async (req, res) => {
  if (req.method === 'DELETE') {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth', '', {
        maxAge: -1,
        path: '/',
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict'
      })
    );
    return res.status(200).json({ message: 'Disconnected' });
  }
  return res.status(405).json({ message: 'Only method DELETE exists' });
};
