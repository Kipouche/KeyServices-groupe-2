import Rent from '../../../../../../../../lib/rent';
import User from '../../../../../../../../lib/user';
import Property from '../../../../../../../../lib/property';
import Mailer from '../../../../../../../../lib/mailer/mailer';
import bookingMail from '../../../../../../../../lib/mailer/bookingMail';
import { useReducer } from 'react';

export default async (req, res) => {
  const { profileId, propertyId } = req.query;
  if (req.method === 'POST') {
    try {
      const { startDate, endDate } = req.body;
      const property = await Property.getById(propertyId);
      const profile = await User.getById(property.user_id);
      if (property.length) {
        const result = await Rent.create(
          startDate,
          endDate,
          profileId,
          propertyId
        );
        const mailBody = bookingMail(startDate, endDate, profile.firstname);
        Mailer.sendMail(
          profile.email,
          'Confirmation de votre inscription chez KeyServices',
          mailBody.html,
          mailBody.text
        );
        return res.status(200).json({ success: result.insertId });
      }
      return res.status(400).json({ message: "Property doesn't exist" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Method not allowed' });
};
