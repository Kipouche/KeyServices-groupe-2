import User from '../../../lib/user';
import { verifyJWT } from '../../../lib/authentification';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const jwt = await verifyJWT(req);
      if (jwt.role !== 'agent' && jwt.role !== 'admin') {
        return res.status(401).json({ message: 'Not authorized' });
      }
      let users = [];
      users = await User.getFieldWorkers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method is not allowed' });
};
