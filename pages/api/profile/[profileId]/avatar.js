import { writeFile } from 'fs';
import { authentification } from '../../../../lib/authentification';
import User from '../../../../lib/user';
import ConvertTime from '../../../../lib/convertTime';
//import InputValidation from '../../../../lib/inputValidation';
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
      `${process.env.ROOOT}/public/avatar/${id}.jpg`,
      base64Data,
      'base64',
      (err) => {
        if (!err) resolve();
      }
    );
  });
};

export default authentification(async (req, res, jwt) => {
  const { profileId } = req.query;

  if (req.method === 'GET') {
    try {
      if (jwt.sub !== parseInt(profileId, 10) && jwt.role === 'member') {
        return res.status(401).json({ message: 'Not authorized' });
      }
      const profile = await User.getByIdClientSide(profileId);
      [profile[0].dateofbirth] = ConvertTime.timeToGMT2(profile[0].dateofbirth)
        .toISOString()
        .split('T');
      return res.status(200).json(profile);
    } catch (error) {
      return res.status(405).json({ message: error.message });
    }
  }
  if (req.method === 'DELETE') {
    return res.status(200).json({ profile: true });
  }
  if (req.method === 'PUT') {
    const { avatar } = req.body;
    if (jwt.sub !== parseInt(profileId, 10)) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    if (!avatar) {
      return res.status(400).json({ message: 'A field is missing' });
    }
    await saveAvatar(avatar, profileId);
    try {
      await User.updateAvatar(profileId);
      return res.status(200).json({ message: 'Successfull updating profile' });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(405).json({ message: `${req.method} doesn't exists` });
});
