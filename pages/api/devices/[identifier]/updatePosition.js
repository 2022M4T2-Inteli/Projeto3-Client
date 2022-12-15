import dbConnect from '@lib/dbConnect';
import Device from '@models/Device';

export default async function handler(req, res) {
    await dbConnect();

    const { identifier } = req.query;
    const { method } = req;

    const { token } = req.body;

    if (
        token !==
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJCZWFjb24iLCJuYW1lIjoiSW9iZWUiLCJpYXQiOjE1MTYyMzkwMjJ9.NAvw01_oCd9VVD6-VH5uVpd4BQ-GJYq4dBhR8bUY5RM'
    ) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    switch (method) {
        case 'POST':
            const { position } = req.body;

            try {
                if (!position) {
                    return res.status(400).json({ success: false });
                }

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
                    );

                    if (device.positions.length >= 5) {
                        // remove the first element
                        await device.updateOne(
                            {
                                $pop: {
                                    positions: -1,
                                },
                            },
                            { new: true }
                        );
                    }

                    res.status(200).json({
                        message: 'Position updated',
                        newPosition: position,
                    });
                } else {
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
