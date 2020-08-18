import authentification from '../../../lib/authentification';
import User from '../../../lib/user';
import convertTimeGMT2 from '../../../lib/convertTimeGMT2';
import InputValidation from '../../../lib/inputValidation';

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
    const { firstname, lastname, phonenumber, dateofbirth } = req.body;
    if (!firstname || !lastname || !phonenumber || !dateofbirth) {
      return res.status(401).json({ message: 'A field is missing' });
    }
    if (
      !InputValidation.verifyName(lastname) ||
      !InputValidation.verifyName(firstname)
    ) {
      console.log('Invalid firstname or lastname');
      return res.status(401).json({ message: 'Invalid firstname or lastname' });
    }
    if (!InputValidation.verifyPhonenumber(phonenumber)) {
      console.log('Invalid phone number');
      return res.status(401).json({ message: 'Invalid phone number' });
    }
    if (InputValidation.isLess18ThanYears(dateofbirth)) {
      console.log('User musts be at least 18 years old');
      return res
        .status(401)
        .json({ message: 'User musts be at least 18 years old' });
    }
    try {
      await User.updateProfile(
        profileId,
        firstname,
        lastname,
        phonenumber,
        dateofbirth
      );
      return res.status(200).json({ message: 'Successfull updating profile' });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(405).json({ message: `${req.method} doesn't exists` });
});
