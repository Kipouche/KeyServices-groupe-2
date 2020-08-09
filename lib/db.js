let mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'eu-cdbr-west-03.cleardb.net',
  user     : 'b7e6b587ccc346',
  password : '1ad3e5d4',
  database : 'heroku_b4ace937aeaf004'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("MySQL connected!");
});

module.exports = connection;