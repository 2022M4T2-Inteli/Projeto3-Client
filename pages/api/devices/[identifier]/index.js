import dbConnect from '../../../../lib/dbConnect';
import Device from '../../../../models/Device';

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
        case 'PUT':
			const { position } = req.body;

			try {
				const device = await Device.findOne({
					identifier: identifier,
				});

				if (device) {
					await device.updateOne(
						{
							$push: {
								positions: {
									place: position,
									time: Date.now(),
								},
							},
						},
						{ new: true }
					)
		
					if (device.positions.length === 5) {
						await deviceModel.updateOne(
							{ identifier: identifier },
							{
								$pop: {
									positions: -1,
								},
							}
						)
					}
		
					res.status(200).json({
						message: 'Position updated',
						newPosition: position,
					})
				} else {
                    console.log({
                        status: 'error',
                        message: 'Device not found',
                    });

                    res.status(500).json({
                        message: 'Device not found',
                    });
                }

			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
    }
}
