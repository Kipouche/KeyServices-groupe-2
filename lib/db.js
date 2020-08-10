let mysql = require('mysql');

let connection;

function handleDisconnect() {
  connection = mysql.createConnection({
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b7e6b587ccc346',
    password: '1ad3e5d4',
    database: 'heroku_b4ace937aeaf004'
  });

  connection.connect(function (err) {
    if (err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  connection.on('error', function (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = connection;