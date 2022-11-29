import dbConnect from '@lib/dbConnect';
import Employee from '@models/Employee';

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const employees = await Employee.find({}); // find all the data in our database
                res.status(200).json(employees);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
    }            
}