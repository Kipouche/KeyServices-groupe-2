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

  return res.send('ok');
};
