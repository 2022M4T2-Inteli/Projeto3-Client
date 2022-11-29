import dbConnect from '@lib/dbConnect';
import Employee from '@models/Employee';

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;

    switch (method) {
        case 'DELETE':
            const { id } = req.query;

            try {
                const employee =
                    (await Employee.findOne({ cpf: id })) ||
                    (await Employee.findOne({ email: id }));

                if (employee) {
                    await Employee.deleteOne({ cpf: employee.cpf });

                    res.status(200).json({
                        message: 'Employee deleted',
                    });
                } else {
                    res.status(400).json({
                        message: 'Employee not found',
                    });
                }
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
    }
}