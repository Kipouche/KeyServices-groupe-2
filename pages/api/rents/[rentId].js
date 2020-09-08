import Rent from '../../../lib/rent';

export default async (req, res) => {
  const { propertyId, userId } = req.query;
  if (req.method === 'GET') {
    try {
      const user = await Rent.getByUserId(userId);

      if (!user.length) {
        return res.status(400).json({ message: "User doesn't exists" });
      }
      return res.status(200).json(user[0]);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  if (req.method === 'GET') {
    try {
      const property = await Rent.getByPropertyId(propertyId);

      if (!property.length) {
        return res.status(400).json({ message: "Property doesn't exists" });
      }
      return res.status(200).json(property[0]);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
