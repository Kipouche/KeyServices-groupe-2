import Property from '../../../lib/property';
import { verifyJWT } from '../../../lib/authentification';

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
    try {
      //const jwt = await verifyJWT(req);
      const { area, address, city, bed, bathroom, room, district } = req.body;
      const result = await Property.create(
        address,
        city,
        district,
        area,
        41, //jwt.message.sub
        room,
        bathroom,
        bed
      );
      return res.status(200).json({ id: result.insertId });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
    return res.send('ok');
  }
  return res.send('ok');
};
