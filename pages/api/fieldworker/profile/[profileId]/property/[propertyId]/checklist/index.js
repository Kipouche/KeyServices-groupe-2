import CheckList from '../../../../../../../../lib/checklist';

export default async (req, res) => {
  const { profileId, propertyId } = req.query;

  if (req.method === 'POST') {
    const {
      entree,
      salon,
      toilettes,
      salledebain,
      chambres,
      cuisine,
      salleamanger,
      message
    } = req.body;

    if (
      !entree ||
      !salon ||
      !toilettes ||
      !salledebain ||
      !chambres ||
      !cuisine ||
      !salleamanger ||
      !message
    ) {
      return res.status(400).json({ message: 'A field is missing' });
    }
    if (!Number.isInteger(entree)) {
      return res.status(400).json({ message: 'Invalid entree ' });
    }
    if (!Number.isInteger(salon)) {
      return res.status(400).json({ message: 'Invalid salon ' });
    }
    if (!Number.isInteger(toilettes)) {
      return res.status(400).json({ message: 'Invalid toilettes ' });
    }
    if (!Number.isInteger(salledebain)) {
      return res.status(400).json({ message: 'Invalid salledebain ' });
    }
    if (!Number.isInteger(chambres)) {
      return res.status(400).json({ message: 'Invalid chambres ' });
    }
    if (!Number.isInteger(cuisine)) {
      return res.status(400).json({ message: 'Invalid cuisine ' });
    }
    if (!Number.isInteger(salleamanger)) {
      return res.status(400).json({ message: 'Invalid salleamanger ' });
    }
    try {
      const result = await CheckList.create(
        propertyId,
        profileId,
        entree,
        salon,
        toilettes,
        salledebain,
        chambres,
        cuisine,
        salleamanger,
        message
      );
      return res.json({ success: result.insertId });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  if (req.method === 'GET') {
    try {
      const result = await CheckList.getByPropertyId(propertyId);
      return res.json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method not allowed' });
};
