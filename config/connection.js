const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_PASSWORD,
  process.env.DB_USER,

  {
    host: "localhost",
    dialect: "mysql2",
    port: 3001,
    // was 3306
  }
);

module.exports = sequelize;
