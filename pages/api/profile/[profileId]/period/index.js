import Period from '../../../../../lib/period';
import { verifyJWT } from '../../../../../lib/authentification';

export default async (req, res) => {
  const { profileId } = req.query;

  /*
  // Only the owner can add a location period
  try {
    const jwt = await verifyJWT(req);
    if (jwt.sub !== parseInt(profileId, 10)) {
      return res.status(401).json({ message: 'Not authorized' });
    }
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }*/

  if (req.method === 'GET') {
    const result = await Period.getByUserId(profileId);
    return res.json(result);
  }
  return res.json({ message: 'Method not allowed' });
};
