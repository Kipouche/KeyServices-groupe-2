import Todo from '../../../../../../lib/rent';
import { verifyJWT } from '../../../../../../lib/authentification';

export default async (req, res) => {
  const { profileId, todoId } = req.query;
  /*
  // Only the owner can add a location period
  try {
    const jwt = await verifyJWT(req);
    if (jwt.sub !== parseInt(profileId, 10)) {
      return res.status(401).json({ message: 'Not authorized' });
    }
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }*/

  if (req.method === 'GET') {
    const result = await Todo.getById(todoId);
    return res.json(result);
  }
  if (req.method === 'PUT') {
    const { startDate, endDate, task } = req.body;
    const result = await Todo.update(todoId, startDate, endDate, task);
    return res.json({ success: 'updated' });
  }
  if (req.method === 'DELETE') {
    const result = await Todo.deleteById(todoId);
    return res.json({ success: 'deleted' });
  }
  return res.json({ message: 'Method not allowed' });
};
