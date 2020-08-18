import authentification from '../../../lib/authentification';
import User from '../../../lib/user';
import convertTimeGMT2 from '../../../lib/convertTimeGMT2';

export default authentification(async (req, res) => {
  const { profileId } = req.query;
  if (req.method === 'GET') {
    try {
      const profile = await User.getByIdClientSide(profileId);
      [profile[0].dateofbirth] = convertTimeGMT2(profile[0].dateofbirth)
        .toISOString()
        .split('T');
      return res.status(200).json(profile);
    } catch (error) {
      return res.status(405).json({ message: error });
    }
  }
  if (req.method === 'DELETE') {
    return res.status(200).json({ profile: true });
  }
  if (req.method === 'PUT') {
      console.log('ok upd');
    return res.status(200).json({ profile: true });
  }
  return res.status(405).json({ message: `${req.method} doesn't exists` });
});
