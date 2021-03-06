import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';

import User from '../../../lib/user';
import InputValidation from '../../../lib/inputValidation';

async function passwordCompare(password, hashPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashPassword, (err, result) => {
      if (!err && result === true) {
        resolve();
      } else {
        reject(new Error('Failed Identification'));
      }
    });
  });
}

export default async (req, res) => {
  // ajouter le jsonwebtoken sur les cookies de la réponse
  // vérifier si le user est active ou pas
  const { email, password } = req.body;

  if (req.method === 'POST') {
    if (!email || !password) {
      return res.status(401).json({ message: 'A field is missing' });
    }
    if (!InputValidation.verifyEmail(email)) {
      return res.status(401).json({ message: 'Invalid email' });
    }
    try {
      const results = await User.getByEmail(email);
      if (results.length === 0) {
        return res.status(401).json({ message: 'Invalid connection' });
      }
      const user = results[0];
      if (!user.validated) {
        return res.status(401).json({ message: 'Invalid connection' });
      }
      try {
        await passwordCompare(password, user.password);
        const claims = {
          sub: user.id,
          email: user.email,
          role: user.role,
          firstname: user.firstname
        };
        const jwt = sign(claims, process.env.SECRET, { expiresIn: '24h' });
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('auth', jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 86400,
            path: '/'
          })
        );
        return res.status(200).json({ message: 'Connected' });
      } catch (error) {
        return res.status(401).json({ message: error.message });
      }
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  } else {
    return res.status(405).json({ message: 'Only method POST required' });
  }
};
