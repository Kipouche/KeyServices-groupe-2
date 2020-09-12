import { writeFile } from 'fs';
import Property from '../../../../../../lib/property';
import InputValidation from '../../../../../../lib/inputValidation';
import {
  authentification,
  verifyJWT
} from '../../../../../../lib/authentification';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb'
    }
  }
};

const savePicture = (data, propertyId, i) => {
  const base64Data = data.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  return new Promise((resolve) => {
    writeFile(
      `public/pictures/${propertyId}_${i}.jpg`,
      base64Data,
      'base64',
      (err) => {
        if (!err) resolve();
      }
    );
  });
};

export default authentification(async (req, res) => {
  const { profileId } = req.query;

  if (req.method === 'POST') {
    const {
      title,
      description,
      price,
      pictures,
      area,
      address,
      city,
      bed,
      bathroom,
      room,
      district
    } = req.body;
    if (
      !area ||
      !address ||
      !city ||
      !bed ||
      !bathroom ||
      !room ||
      !district ||
      !title ||
      !description ||
      !price ||
      !pictures
    ) {
      return res.status(400).json({ message: 'A field is missing' });
    }
    if (!InputValidation.verifyAddress(address)) {
      return res.status(400).json({ message: 'Invalid adress' });
    }
    if (!InputValidation.verifyName(city) && city !== 'paris') {
      return res.status(400).json({ message: 'Invalid city' });
    }
    if (!InputValidation.verifyInteger(district)) {
      return res.status(400).json({ message: 'Invalid district' });
    }
    if (!InputValidation.verifyInteger(area)) {
      return res.status(400).json({ message: 'Invalid Area' });
    }
    if (!InputValidation.verifyInteger(room)) {
      return res.status(400).json({ message: 'Invalid room' });
    }
    if (!InputValidation.verifyInteger(bed)) {
      return res.status(400).json({ message: 'Invalid bed' });
    }
    if (!InputValidation.verifyInteger(bathroom)) {
      return res.status(400).json({ message: 'Invalid bathroom' });
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
        bed,
        title,
        description,
        price
      );
      pictures.map(async (picture, i) => {
        await savePicture(picture, result.insertId, i);
      });
      return res.status(200).json({ id: result.insertId });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method is not used' });
});
