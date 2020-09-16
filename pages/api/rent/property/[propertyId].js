import Rent from '../../../../lib/rent';
import Property from '../../../../lib/property';

export default async (req, res) => {
  const { propertyId } = req.query;
  if (req.method === 'GET') {
    try {
      const property = await Property.getById(propertyId);
      if (property.length) {
        const propertyRents = await Rent.getByPropertyId(propertyId);
        return res.status(200).json(propertyRents);
      }
      return res.status(400).json({ message: "Property doesn't exist" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method not allowed' });
};
