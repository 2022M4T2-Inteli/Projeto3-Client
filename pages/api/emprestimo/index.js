import dbConnect from '@lib/dbConnect';

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;

    switch (method) {
        case 'GET':
            break;

        case 'POST':
            break;

        case 'DELETE':
            break;
    }
}
