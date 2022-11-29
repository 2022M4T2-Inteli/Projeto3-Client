import dbConnect from '../../../lib/dbConnect';
import Device from '../../../models/Device';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  if (method == 'POST') {
    const { id, device, price, from } = req.body;

    try {
			const allDevices = await Device.find({});

			if (!allDevices.some((device) => device.identifier === id)) {
				await Device.create({
          identifier: id,
          device: device,
          price: price,
          from: from,
        });

				res.status(200).json({
					message: 'Device created',
				});
			} else {
				res.status(400).json({
          message: 'Device already exists',
        });
			}

      res.status(200).json({
        message: 'Device added',
        device: req.body,
      });
    } catch (error) {
      res.status(500).json({ Error: error });
    }
  }
}
