import dbConnect from '@lib/dbConnect';
import Device from '@models/Device';

export default async function handler(req, res) {
    const { token } = req.body;
    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                if (token && token == process.env.JWT_SECRET) {
                    res.send({
                        message: 'Token is valid',
                        authorized: true,
                    });
                } else {
                    res.send({
                        message: 'Token is invalid or does not exist',
                        authorized: false,
                    });
                }
            } catch (error) {
                res.status(500).json({ Error: error, authorized: false });
            }
            break;
    }
}
