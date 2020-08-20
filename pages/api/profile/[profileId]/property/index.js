import Property from '../../../../../lib/property';
import {
  authentification,
  verifyJWT
} from '../../../../../lib/authentification';

export default authentification(async (req, res) => {
  if (req.method === 'GET') {
    const { profileId } = req.query;

    try {
      const jwt = await verifyJWT(req);
      if (jwt.sub != profileId) {
        return res.status(401).json({ message: 'Not authorized' });
      }
      const properties = await Property.getByUserId(profileId);
      return res.status(200).json(properties);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
  }
});
