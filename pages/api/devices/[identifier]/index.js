import dbConnect from '@lib/dbConnect';
import Device from '@models/Device';

export default async function handler(req, res) {
    await dbConnect();

    const { identifier } = req.query;
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const device = await Device.findOne({
                    identifier: identifier,
                });

                if (device) {
                    res.status(200).json(device);
                } else {
                    res.status(404).json({ message: 'Device not found' });
                }
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
    }
}
