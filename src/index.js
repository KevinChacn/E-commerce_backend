require('dotenv').config();
const app = require('./app');
const database = require('./database');


app.listen(3000)
console.log('Server listen on port', 3000)