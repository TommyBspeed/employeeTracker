// import mysql2
const mysql = require("mysql2");
// import inquirer
const inquirer = require("inquirer");

require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3001,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "employees",
});
