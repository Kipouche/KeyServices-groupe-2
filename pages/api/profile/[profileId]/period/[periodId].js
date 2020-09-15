import Period from '../../../../../lib/period';
import { verifyJWT } from '../../../../../lib/authentification';

export default async (req, res) => {
  const { profileId, periodId } = req.query;
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
    const result = await Period.getByUserId(periodId);
    return res.json(result);
  }
  if (req.method === 'PUT') {
      console.log('hello');
      
    const result = await Period.update(periodId, startDate, endDate);
    return res.json({ success: 'updated' });
  }
  if (req.method === 'DELETE') {
    const result = await Period.deleteById(periodId);
    return res.json({ success: 'deleted' });
  }
  return res.json({ message: 'Method not allowed' });
};
