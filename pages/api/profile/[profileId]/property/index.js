import Property from '../../../../../lib/property';
import InputValidation from '../../../../../lib/inputValidation';
import {
  authentification,
  verifyJWT
} from '../../../../../lib/authentification';

export default authentification(async (req, res) => {
  const { profileId } = req.query;

  if (req.method === 'GET') {
    try {
      const jwt = await verifyJWT(req);
      if (jwt.sub !== parseInt(profileId)) {
        return res.status(401).json({ message: 'Not authorized' });
      }
      const properties = await Property.getByUserId(profileId);
      return res.status(200).json(properties);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  if (req.method === 'POST') {
    const { area, address, city, bed, bathroom, room, district } = req.body;
    if (!area || !address || !city || !bed || !bathroom || !room || !district) {
      return res.status(401).json({ message: 'A field is missing' });
    }
    if (!InputValidation.verifyAddress(address)) {
      return res.status(401).json({ message: 'Invalid adress' });
    }
    if (!InputValidation.verifyName(city) && city !== 'paris') {
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
      if (jwt.sub !== parseInt(profileId, 10)) {
        return res.status(401).json({ message: 'Not authorized' });
      }
      const result = await Property.create(
        address,
        city,
        district,
        area,
        profileId,
        room,
        bathroom,
        bed
      );
      return res.status(200).json({ id: result.insertId });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }
});
