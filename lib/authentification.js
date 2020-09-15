import { verify } from 'jsonwebtoken';

const verifyJWT = (req) =>
  new Promise((resolve, reject) => {
    verify(req.cookies.auth, process.env.SECRET, async (err, decoded) => {
      if (!err && decoded) {
        resolve(decoded);
      }
      reject(new Error('Not authenticated'));
    });
  });

const authentification = (handler, roles = [], profile = null) => async (
  req,
  res
) => {
  try {
    const jwt = await verifyJWT(req);
    if (!roles.length) {
      if (profile) {
        const { profileId } = req.query;
        if (parseInt(profileId, 10) === jwt.sub) {
          return handler(req, res, jwt);
        }
        return res.status(401).json({ message: 'Not authorized' });
      }
      return handler(req, res, jwt);
    }
    return handler(req, res, jwt);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export { authentification, verifyJWT };
