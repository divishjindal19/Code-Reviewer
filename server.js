require('dotenv').config();
const app = require('./BACKEND/src/app');


app.listen(3000,() => {
    console.log('Server is running on http://localhost:3000');
})