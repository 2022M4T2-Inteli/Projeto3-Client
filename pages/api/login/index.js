import dbConnect from '@lib/dbConnect';
import Employees from '@models/Employee';

import nodemailer from 'nodemailer';

let SMTP_CONFIG = {
    host: 'smtp.gmail.com',
    port: 587,
    user: 'inteliblockchain@gmail.com',
    pass: 'bxnkwmrvbhshuqrl',
};

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

export default async function handler(req, res) {
    await dbConnect();

    const { email } = req.body;
    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                const employees = await Employees.find({});

                // check if email exists in any of the employees
                if (employees.some((employee) => employee.email === email)) {
                    if (email) {
                        try {
                            await transporter.sendMail({
                                text: 'Texto do Email',
                                subject: 'Admin Token - Validade',
                                from: 'Noreply InteliBlockChain<noreply@InteliBlockChain.com>',
                                to: `${email}`,
                                html: `<p>Seu token de acesso é: <br/>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.JLQEgIIiuIQfihhG-oDtZNOpQ24Rw3BwrQvLRkHZxjk</p>`,
                            });

                            res.status(200).json({ message: 'Email sent' });
                        } catch {
                            res.status(500).json({ message: 'Email not sent' });
                        }
                    } else {
                        res.status(400).json({
                            message: 'Email not sent',
                        });
                    }
                } else {
                    res.status(400).json({
                        message: 'Email not found',
                    });
                }
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
    }
}
