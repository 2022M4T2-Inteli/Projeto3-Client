import dbConnect from '@lib/dbConnect';
import Device from '@models/Device';

export default async function handler(req, res) {

    const { token } = req.body;
    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                if (
                    token &&
                    token ==
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJCZWFjb24iLCJuYW1lIjoiSW9iZWUiLCJpYXQiOjE1MTYyMzkwMjJ9.NAvw01_oCd9VVD6-VH5uVpd4BQ-GJYq4dBhR8bUY5RM'
                ) {
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
