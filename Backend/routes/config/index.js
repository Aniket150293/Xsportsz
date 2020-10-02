var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'multibanking_erp'
})

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;