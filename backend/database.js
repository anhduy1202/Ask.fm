var mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "ask.me",
});

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("DB Connected");
});

module.exports = dbConnection;