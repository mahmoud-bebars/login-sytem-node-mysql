const mysql = require("mysql2");

exports.start = mysql.createConnection({
  host: process.env.DATABASEHOST,
  user: process.env.DATABASEUSER,
  password: process.env.DATABASEPASSWORD,
  database: process.env.DATABASE,
});
