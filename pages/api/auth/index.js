import { verify } from 'jsonwebtoken';

export default async (req, res) => {
  verify(req.cookies.auth, process.env.SECRET, async (err, decoded) => {
    if (!err && decoded) {
      return res.status(200).json({ message: req.cookies.auth });
    }
    return res.status(401).json({ message: 'Not authenticated' });
  });
};
