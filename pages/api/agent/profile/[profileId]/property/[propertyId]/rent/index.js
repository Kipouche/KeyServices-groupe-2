import Rent from '../../../../../../../../lib/rent';
import Property from '../../../../../../../../lib/property';

export default async (req, res) => {
  const { profileId, propertyId } = req.query;
  if (req.method === 'POST') {
    try {
      const { startDate, endDate } = req.body;
      const property = await Property.getById(propertyId);
      if (property.length) {
        const result = await Rent.create(
          startDate,
          endDate,
          profileId,
          propertyId
        );
        return res.status(200).json({ success: result.insertId });
      }
      return res.status(400).json({ message: "Property doesn't exist" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method not allowed' });
};
