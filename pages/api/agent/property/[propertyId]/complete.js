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
  const { title, description, pictures } = req.body;
  const { propertyId } = req.query;
  if (req.method === 'POST') {
    try {
      await Property.completeInfos(propertyId, title, description);
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
