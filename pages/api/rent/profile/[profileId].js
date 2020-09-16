import Rent from '../../../../lib/rent';
import User from '../../../../lib/user';

export default async (req, res) => {
  const { profileId, option } = req.query;
  if (req.method === 'GET') {
    try {
      const user = await User.getById(profileId);
      if (user.length) {
        if (option === 'withAddressAndPrice') {
          const userRents = await Rent.getByPropertyOwnerWithAddressAndPrice(
            profileId
          );
          return res.status(200).json(userRents);
        }
        const userRents = await Rent.getByPropertyOwner(profileId);
        return res.status(200).json(userRents);
      }
      return res.status(400).json({ message: "User doesn't exist" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method not allowed' });
};
