//set up a sign in route

import { connectToDatabase } from '../../../util/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const { email, password } = req.body;

  const user = await db.collection('users').findOne({
    email: email,
    password: password,
  });

  if (user) {
    res.status(200).json({
      message: 'Login successful',
    });
  } else {
    res.status(401).json({
      message: 'Login failed',
    });
  }
}
