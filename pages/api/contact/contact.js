import User from '../../../lib/user';
import InputValidation from '../../../lib/inputValidation';

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
