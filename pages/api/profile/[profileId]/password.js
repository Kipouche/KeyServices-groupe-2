import bcrypt from 'bcrypt';
import User from '../../../../lib/user';
import { authentification } from '../../../../lib/authentification';

async function passwordCompare(password, hashPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashPassword, (err, result) => {
      if (!err && result === true) {
        resolve();
      } else {
        reject(new Error('The password is not matching'));
      }
    });
  });
}

export default authentification(
  async (req, res) => {
    const { profileId } = req.query;
    if (req.method === 'PUT') {
      const { actualPassword, newPassword } = req.body;
      try {
        const [user] = await User.getById(profileId);
        await passwordCompare(actualPassword, user.password);
        await User.updatePassword(profileId, newPassword);
        return res.status(200).json({ message: 'User updated' });
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    }
    return res.status(400).json({ message: 'Only PUT method exists' });
  },
  [],
  true
);
