const express = require("express");
const mysql = require("mysql");
const app = express();

//create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "userdata",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Databse connected..");
});
module.exports = db;
