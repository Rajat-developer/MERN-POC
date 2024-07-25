const express = require("express");
const app = express();
require('dotenv').config();
const connection = require("./db/db");
//const connection = require("./db/mysqldb");
//const redisClient = require("./db/redisdb");
const cors = require("cors");
connection;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", require("./routes/userroutes"));

app.listen(process.env.port || 4000, () => {
  console.log(`port listening on ${process.env.port}`);
});
