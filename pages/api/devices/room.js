import dbConnect from '@lib/dbConnect';
import Device from '@models/Device';

export default async function handler(req, res) {
    await dbConnect();

    const { room } = req.body;
    const { method } = req;

    console.log(room);

    switch (method) {
        case 'GET':
            try {
                const devices = await Device.find({});

                console.log(devices[0].positions[devices.positions.length - 1]);

                const devicesInRoom = devices.filter((device) => {
                    return (
                        device.positions[device.positions.length - 1].place ===
                        room
                    );
                });

                res.status(200).json({
                    message: 'Devices in room',
                    devices: devicesInRoom,
                });
            } catch (error) {
                console.error(error);

                res.status(500).json({ Error: error });
            }

            break;
    }
}
