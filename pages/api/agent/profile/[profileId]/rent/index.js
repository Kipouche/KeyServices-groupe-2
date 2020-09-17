import Rent from '../../../../../../lib/rent';

export default async (req, res) => {
  const { profileId } = req.query;

  if (req.method === 'GET') {
    try {
      const userRents = await Rent.getByUserId(profileId);
      return res.status(200).json(userRents);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method not allowed' });
};
