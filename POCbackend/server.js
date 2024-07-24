const express = require("express");
const app = express();
//const connection = require("./db/db");
const connection = require("./db/mysqldb");
const redisClient = require("./db/redisdb");
const port = 4000;
const cors = require("cors");
connection;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", require("./routes/userroutes"));

app.listen(port, () => {
  console.log(`port listening on ${port}`);
});
