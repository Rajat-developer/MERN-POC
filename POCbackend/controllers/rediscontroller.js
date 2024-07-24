// const redisClient = require("../db/redisdb");
// const db = require("../db/mysqldb");

// const getUser = async (req, res) => {
//   redisClient.get("userList", (err, data) => {
//     if (err) {
//       res.status(400).send({ err: err });
//     } else if (data) {
//       console.log("Data found in cache", data);
//       res.status(200).send({ result: JSON.parse(data) });
//     } else {
//       console.log("Fetching data from database");
//       // Fetch data from the database
//       db.query("SELECT * FROM users", (err, rows) => {
//         if (err) {
//           res.status(400).send({ apieErr: err });
//         } else {
//           // Cache the data for future use
//           redisClient.setex("userList", 3600, rows);
//           res.status(200).send({ result: rows });
//         }
//       });
//     }
//   });
// };

// const setuser = (req, res) => {
//     const { name, email, contact, password, image } = req.body;
//     const query = "INSERT INTO users (name, email, contact, password, image) VALUES (?, ?, ?, ?, ?)";
//     const values = [name, email, contact, password, image];
  
//    db.query(query, values, (err, result) => {
//       if (err) {
//         res.status(400).send({ dbErr: err });
//       } else {
//         console.log("New user added to the database", result);
  
//         db.query("SELECT * FROM users", (err, rows) => {
//           if (err) {
//             res.status(400).send({ dbErr: err });
//           } else {
//             redisClient.setex("userList", 3600, JSON.stringify(rows), (err) => {
//               if (err) {
//                 res.status(400).send({ cacheErr: err });
//               } else {
//                 res.status(200).send({ result: "User added successfully", userList: rows });
//               }
//             });
//           }
//         });
//       }
//     });
//   };
  
 

// module.exports = { getUser, setuser };
