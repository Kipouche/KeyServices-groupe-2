import Property from '../../../../lib/property';
import { verifyJWT } from '../../../../lib/authentification';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { type } = req.query;
    try {
      const jwt = await verifyJWT(req);      
      if (jwt.role !== 'agent' && jwt.role !== 'admin') {          
        return res.status(401).json({ message: 'Not authorized' });
      }
      let properties = [];
      if (type === 'unvalidated') properties = await Property.getUnvalidatedProperties();
      else properties = await Property.getAll();
      return res.status(200).json(properties);
    } catch (error) {        
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method is not allowed' });
};
