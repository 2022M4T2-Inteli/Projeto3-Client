import dbConnect from '../../../lib/dbConnect';
import Device from '../../../models/Device';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method == 'GET') {
    try {
      const devices = await Device.find(
        {}
      ); /* find all the data in our database */
      res.status(200).json(devices);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
