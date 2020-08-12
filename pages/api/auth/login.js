const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../../lib/user');
const InputValidation = require('../../../lib/inputValidation');

async function passCompare(password, hashPassword) {
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
  const {email, password } = req.body;

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
      try {
        await passCompare(password, user.password);
        const claims = {sub: user.id, myPersonEmail: user.email}; /// ??? failed
        jwt.sign(claims, '81248b68-d188-47bb-aca3-1201ba51897c');
        res.json({authToken: jwt});
        // CHekc JWT token before authorization (secure, httpOnly SameSite to yourr cookies)
        // Si match request immediatly
        // Sinon error 401
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
