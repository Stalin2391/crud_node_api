const mysql = require('mysql');

const connection = mysql.createPool({
    port:process.env.PORT,
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.MYSQL_DB,
    connectionLimit:10
});

module.exports = connection;