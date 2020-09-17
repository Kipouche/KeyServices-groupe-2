const mysql = require('mysql');

let pool;

function handleDisconnect() {
  pool = mysql.createPool({
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b7e6b587ccc346',
    password: '1ad3e5d4',
    database: 'heroku_b4ace937aeaf004',
    connectionLimit: 10
  });
}

handleDisconnect();

module.exports = pool;
