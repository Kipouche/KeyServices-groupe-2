import { verify } from 'jsonwebtoken';

const verifyJWT = (req) =>
  new Promise((resolve, reject) => {
    verify(req.cookies.auth, process.env.SECRET, async (err, decoded) => {
      if (!err && decoded) {
        resolve();
      }
      reject(new Error('Not authenticated'));
    });
  });

const authentification = (handler) => async (req, res) => {
  try {
    await verifyJWT(req);
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

export default authentification;
