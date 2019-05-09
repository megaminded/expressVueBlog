const config = {
 host: 'localhost',
 user: 'root',
 password: '',
 db: 'nodeblog',
}
const mysql = require('mysql')
const connection = mysql.createConnection({
 host: config.host,
 user: config.user,
 password: config.password,
 database: config.db
});
connection.connect();
module.exports = connection;
