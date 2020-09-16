import Rent from '../../../../../../lib/rent';
import { verifyJWT } from '../../../../../../lib/authentification';

export default async (req, res) => {
  const { profileId, rentId } = req.query;
  const { startDate, endDate } = req.body;

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
    const result = await Rent.getById(rentId);
    return res.json(result);
  }
  if (req.method === 'PUT') {
    const result = await Rent.update(rentId, startDate, endDate);
    return res.json({ success: 'updated' });
  }
  if (req.method === 'DELETE') {
    const result = await Rent.deleteById(rentId);
    return res.json({ success: 'deleted' });
  }
  return res.json({ message: 'Method not allowed' });
};
