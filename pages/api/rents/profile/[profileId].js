import Rent from '../../../../lib/rent';
import User from '../../../../lib/user';

export default async (req, res) => {
  const { userId } = req.query;
  if (req.method === 'GET') {
    try {
      const user = await User.getById(userId);
      if (user.lenght > 0) {
        const userRents = await Rent.getByUserId(userId);
        return res.status(200).json(userRents);
      }
      return res.status(400).json({ message: "User doesn't exist" }); 
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
