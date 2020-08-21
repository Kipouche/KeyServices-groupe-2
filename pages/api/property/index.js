import Property from '../../../lib/property';
import { verifyJWT } from '../../../lib/authentification';
import InputValidation from '../../../lib/inputValidation';

export default async (req, res) => {
  if (req.method === 'GET') {
    const {
      area,
      district,
      bed,
      room,
      bathroom,
      priceMin,
      priceMax
    } = req.query;

    const properties = await Property.getByFilter(
      area,
      bed,
      room,
      bathroom,
      priceMin,
      priceMax,
      district
    );
    return res.status(200).json(properties);
  }

  if (req.method === 'POST') {
    const { area, address, city, bed, bathroom, room, district } = req.body;
    if (!area || !address || !city || !bed || !bathroom || !room || !district) {
      return res.status(401).json({ message: 'A field is missing' });
    }
    if (!InputValidation.verifyAddress(address)) {
      return res.status(401).json({ message: 'Invalid adress' });
    }
    if (!InputValidation.verifyName(city)) {
      return res.status(401).json({ message: 'Invalid city' });
    }
    if (!InputValidation.verifyInteger(district)) {
      return res.status(401).json({ message: 'Invalid district' });
    }
    if (!InputValidation.verifyInteger(area)) {
      return res.status(401).json({ message: 'Invalid Area' });
    }
    if (!InputValidation.verifyInteger(room)) {
      return res.status(401).json({ message: 'Invalid room' });
    }
    if (!InputValidation.verifyInteger(bed)) {
      return res.status(401).json({ message: 'Invalid bed' });
    }
    if (!InputValidation.verifyInteger(bathroom)) {
      return res.status(401).json({ message: 'Invalid bathroom' });
    }
    try {
      const jwt = await verifyJWT(req);
      const result = await Property.create(
        address,
        city,
        district,
        area,
        jwt.sub,
        room,
        bathroom,
        bed
      );
      return res.status(200).json({ id: result.insertId });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }
  return res.send('ok');
};
