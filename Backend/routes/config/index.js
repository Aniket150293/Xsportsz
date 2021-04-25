var mysql = require("mysql");

const MODE = 1; // 1- Local, 2 - Production
let DB_HOST = "localhost";
let DB_USER = "root";
let DB_PASS = "";
let DB_NAME = "xsportsz";
let connection = "";

if (MODE == 2) {
  DB_HOST = "/cloudsql/xsportsz-backend:asia-south1:xsportsz";
  DB_USER = process.env.DB_USER;
  DB_PASS = process.env.DB_PASS;
  DB_NAME = process.env.DB_NAME;
  connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    socketPath: DB_HOST,
  });
} else {
  connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  });
}

connection.connect(function (err) {
  if (err) {
    console.log(err);
  }
});

module.exports = connection;
