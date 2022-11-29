import dbConnect from '../../../../lib/dbConnect';
import Device from '../../../../models/Device';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  await dbConnect();

  
}
