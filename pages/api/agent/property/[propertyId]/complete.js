import { writeFile } from 'fs';

import Property from '../../../../../lib/property';

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
export default async (req, res) => {
  const { title, description, price, pictures } = req.body;
  const { propertyId } = req.query;
  if (req.method === 'PUT') {
    if (!title || !description || !price || !pictures) {
      return res.status('400').json({ message: 'A field is missing' });
    }
    if (!Number.isInteger(price)){
      return res.status('400').json({ message: 'Invalid price number' });
    }
    try {
      await Property.completeInfos(propertyId, title, description, price);
      pictures.map(async (picture, i) => {
        await savePicture(picture, propertyId, i);
      });
      return res.json({ message: 'Property completed' });
    } catch (error) {
      return res.status('400').json({ message: error.message });
    }
  }
  return res.status('403').json({ message: 'Only POST method is allowed' });
};
