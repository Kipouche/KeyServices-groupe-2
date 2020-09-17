import Todo from '../../../../../../lib/todo';

export default async (req, res) => {
  const { profileId, option } = req.query;

  if (req.method === 'GET') {
    try {
      if (option === 'withAddress') {
        const result = await Todo.getByUserIdWithAddress(profileId);
        return res.json(result);
      }
      const result = await Todo.getByUserId(profileId);
      return res.json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method not allowed' });
};
