// const Sequelize = require("sequelize");
require("dotenv").config();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "employee_db",
});

module.exports = connection;
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_PASSWORD,
//   process.env.DB_USER,

//   {
//     host: "localhost",
//     dialect: "mysql2",
//     port: 3306,
//   }
// );

// module.exports = sequelize;
