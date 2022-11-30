import jwt from 'jsonwebtoken';

function verify(token) {
    try {
        jwt.verify(token, process.env.JWT_SECRET);
        return true;
    } catch (error) {
        return false
    }
}

verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.JLQEgIIiuIQfihhG-oDtZNOpQ24Rw3BwrQvLRkHZxjk')

export default verify;