import dbConnect from '@lib/dbConnect';
import Employee from '@models/Employee';
import verify from '@utils/verify';

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                // if (verify(token)) {
                const employees = await Employee.find({}); // find all the data in our database
                res.status(200).json(employees);
                // } else {
                //     res.status(401).json({
                //         message: 'Not authorized',
                //     });
                // }
            } catch (err) {
                res.status(500).json({
                    message: err,
                });
            }
            break;
    }
}
