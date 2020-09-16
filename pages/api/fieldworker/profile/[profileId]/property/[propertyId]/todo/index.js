import Todo from '../../../../../../../../lib/todo';

export default async (req, res) => {
  const { profileId, propertyId } = req.query;

  if (req.method === 'POST') {
    const { startDate, endDate, task } = req.body;

    if (!startDate || !endDate || !task) {
      return res.status(400).json({ message: 'A field is missing' });
    }
    try {
      const result = await Todo.create(
        propertyId,
        profileId,
        startDate,
        endDate,
        task
      );
      return res.json({ success: result.insertId });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  if (req.method === 'GET') {
    try {
      const result = await Todo.getByPropertyIdAndUserId(propertyId, profileId);
      return res.json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method not allowed' });
};
