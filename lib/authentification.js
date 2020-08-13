import { verify } from 'jsonwebtoken';

export default (handler) => async (req, res) => {
  verify(req.cookies.auth, process.env.SECRET, async (err, decoded) => {
    if (!err && decoded) {
      return handler(req, res);
    }
    return res.status(401).json({ message: 'Not authenticated' });
  });
};
