import { writeFile } from 'fs';
import AWS from 'aws-sdk';
import { authentification } from '../../../../lib/authentification';
import User from '../../../../lib/user';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

const saveAvatar = (data, id) => {
  const base64Data = data.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  return new Promise((resolve) => {
    writeFile(
      `${process.env.ROOT}/public/avatar/${id}.jpg`,
      base64Data,
      'base64',
      (err) => {
        if (!err) resolve();
      }
    );
  });
};

const uploadFileToAWS = (data, id) => {
  const base64Data = data.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  const fileContent = Buffer.from(base64Data, 'base64');
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey
  });
  // Setting up S3 upload parameters
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: `avatar/${id}.jpg`, // File name you want to save as in S3
    Body: fileContent,
    ACL: 'public-read'
  };

  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
  });
};

export default authentification(async (req, res, jwt) => {
  const { profileId } = req.query;

  if (req.method === 'PUT') {
    const { avatar } = req.body;
    if (jwt.sub !== parseInt(profileId, 10)) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    if (!avatar) {
      return res.status(400).json({ message: 'A field is missing' });
    }
    //await saveAvatar(avatar, profileId);
    uploadFileToAWS(avatar, profileId);
    try {
      await User.updateAvatar(profileId);
      return res.status(200).json({
        message: `${process.env.ROOT}/public/avatar/${profileId}.jpg`
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(405).json({ message: `${req.method} doesn't exists` });
});
