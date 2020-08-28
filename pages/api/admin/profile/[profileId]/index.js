import User from '../../../../../lib/user';
import {
  verifyJWT,
  authentification
} from '../../../../../lib/authentification';

export default authentification(async (req, res) => {
  if (req.method === 'DELETE') {
    const { profileId } = req.query;

    try {
      const jwt = await verifyJWT(req);
      if (jwt.role !== 'admin') {
        return res.status(401).json({ message: 'Not authorized' });
      }
      await User.deleteById(profileId);
      return res.status(200).json({ message: `Profile ${profileId} deleted` });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method is not allowed' });
});
