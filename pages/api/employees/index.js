import dbConnect from '@lib/dbConnect';
import Employee from '@models/Employee';
import verify from '@utils/verify';

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                if (
                    verify(
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.JLQEgIIiuIQfihhG-oDtZNOpQ24Rw3BwrQvLRkHZxjk'
                    )
                ) {
                    const employees = await Employee.find({}); // find all the data in our database
                    res.status(200).json(employees);
                } else {
                    res.status(401).json({ success: false });
                }
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
    }
}
