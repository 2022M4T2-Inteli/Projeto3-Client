import axios from 'axios';

const instance = axios.create({
    headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.JLQEgIIiuIQfihhG-oDtZNOpQ24Rw3BwrQvLRkHZxjk`,
    },
});

export default instance;
