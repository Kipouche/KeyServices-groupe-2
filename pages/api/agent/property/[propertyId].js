import Property from '../../../lib/property';

export default async (req, res) => {
  const { propertyId } = req.query;
  if (req.method === 'GET') {
    try {
      const property = await Property.getById(propertyId);

      if (!property.length) {
        return res.status(400).json({ message: "Property doesn't exists" });
      }
      return res.status(200).json(property[0]);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
