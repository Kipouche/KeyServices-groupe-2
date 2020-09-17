import User from '../../../../../../lib/user';
import {
  verifyJWT,
  authentification
} from '../../../../../../lib/authentification';

export default authentification(async (req, res) => {
  if (req.method === 'PUT') {
    const { role } = req.body;
    const { profileId } = req.query;

    if (!role) {
      return res.status(400).json({ message: 'Role field is missing' });
    }
    if (role !== 'agent' && role !== 'member' && role !== 'admin' && role !== 'fieldworker') {
      return res.status(400).json({ message: 'Invalid role' });
    }
    try {
      const jwt = await verifyJWT(req);
      if (jwt.role !== 'admin') {
        return res.status(401).json({ message: 'Not authorized' });
      }
      await User.updateRole(profileId, role);
      return res.status(200).json({ message: `Profile ${profileId} updated` });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method is not allowed' });
});
