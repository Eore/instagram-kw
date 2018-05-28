var mysql = require('mysql');

var connection = mysql.createConnection
(
    {
        host: "localhost",
        port: 8889,
        database: "simple_instagram",
        user: "root",
        password: "root",
    }
);

module.exports = connection