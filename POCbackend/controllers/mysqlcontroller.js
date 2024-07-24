const db = require("../db/mysqldb");


exports.getuser = (req, res) => {
  const sql = "SELECT * FROM users";
 db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ data: results });
  });
};

exports.setuser = (req, res) => {
  const { name, email, password, contact, image} = req.body;
  const sql =
    "INSERT INTO users (name, email, password, contact,image  ) VALUES (?, ?, ?, ?,?)";
  db.query(sql, [name, email, password, contact, image], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res
      .status(201)
      .send({ id: result.insertId, name, email, password, contact, image });
    //res.status(201).send(result);
  });
};



  

exports.edituser = (req, res) => {
  const { id } = req.params;
  const { name, email, contact, image } = req.body;
  const sql = `UPDATE users SET name = ?, email = ?, contact=?, image=? WHERE _id = ${req.params.id} `;
  db.query(sql, [name, email, contact, image, id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ id: result.updateId, name, email, contact, image });
  });
};

exports.deleteuser = (req, res) => {
  const sql = `DELETE FROM users WHERE _id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: "User deleted" });
  });
};

exports.singleUser = (req, res) => {
  const sql = `SELECT * FROM users WHERE _id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.length === 0) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(result[0]);
  });
};
