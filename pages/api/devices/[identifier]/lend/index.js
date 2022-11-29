import dbConnect from '@lib/dbConnect';
import Device from '@models/Device';

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;
    const { identifier } = req.query;

    switch (method) {
        case 'PUT':
            try {
                const {
                    id,
                    name,
                    since,
                    until,
                    isStudent,
                    isEmployee,
                    canTakeHome,
                } = req.body;

                const device = await Device.findOne({
                    identifier: identifier,
                });

                if (device) {
                    // update the borrowed object within the device
                    await Device.updateOne(
                        {
                            identifier: identifier,
                        },
                        {
                            $set: {
                                borrowed: {
                                    id: id,
                                    name: name,
                                    since: since,
                                    until: until,
                                    isStudent: isStudent,
                                    isEmployee: isEmployee,
                                    canTakeHome: canTakeHome,
                                },
                            },
                        }
                    );

                    res.status(200).json({
                        message: 'Device updated',
                    });
                } else {
                    res.status(404).json({ message: 'Device not found' });
                }
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
    }
}
