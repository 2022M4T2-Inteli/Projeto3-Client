import jwt from 'jsonwebtoken';

function verify(token) {
    console.log(token)

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        return true;
    } catch (error) {
        return false;
    }
}

export default verify;
