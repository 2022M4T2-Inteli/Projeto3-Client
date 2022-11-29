import dbConnect from '@lib/dbConnect';
import Employee from '@models/Employee';

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;

    switch (method) {
        case 'GET':
            const { id } = req.query;

            try {
                const employee =
                    (await Employee.findOne({ cpf: id })) ||
                    (await Employee.findOne({ email: id }));

                
                if (employee) {
                    res.status(200).json(employee);
                } else {
                    res.status(400).json({ success: false });
                }
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
    }
}