import dbConnect from '@lib/dbConnect';
import Employee from '@models/Employee';

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;

    if (method == 'POST') {
        const {
            fullName,
            email,
            cpf,
            role
        } = req.body;

        try {
            const allEmployees = await Employee.find({});

            if (!allEmployees.some( employee => employee.cpf === cpf)) {
                await Employee.create({
                    fullName: fullName,
                    email: email,
                    cpf: cpf,
                    role: role,
                });

                res.status(200).json({
                    message: 'Employee added',
                    employee: req.body,
                });
            } else {
                res.status(400).json({
                    message: 'Employee already exists',
                });
            }
        } catch (error) {
            res.status(500).json({ Error: error });
        }
    }
}
