import sha256 from 'sha256';
import User from '../../../lib/user';

export default async (req, res) => {
  const { id, token } = req.query;
  if (!id || !token) {
    return res.status(401).json({ message: 'A parameter is missing' });
  }
  if (sha256(id + process.env.SECRET_SHA) === token) {
    try {
      await User.validate(id);
      return res.status(200).json({ message: 'User is validated' });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } else {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
