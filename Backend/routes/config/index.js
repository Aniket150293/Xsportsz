var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'xsportsz'
})

connection.connect(function (err) {
  if (err) {
    console.log(err);
  }
});

module.exports = connection;