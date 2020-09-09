import Rent from '../../../../lib/rent';
import Property from '../../../../lib/property';

export default async (req, res) => {
  const { propertyId } = req.query;
  if (req.method === 'GET') {
    try {
      const property = await Property.getById(propertyId);
      const propertyRents = await Rent.getByPropertyId(propertyId);
      if (!propertyRents) {
        return res.status(400).json({
          message: "Pas d'historique de location pour cette propriété"
        });
      }
      return res.status(200).json(propertyRents[0]);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
