require('dotenv').config();
const mysql = require('mysql2');


module.exports = mysql.createConnection({
    // USE YOUR OWN CONNECTION DETAILS
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'test'
});