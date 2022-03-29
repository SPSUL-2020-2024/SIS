const express = require("express");
const mysql = require("mysql");
const router = express.Router();

var db = require('../db');

router.get("/", (req, res) => {
  res.status(204).send("please specifies function");
})
router.post("/", (req, res) => {
  res.status(204).send("please specifies function");
})

/*empty*/
router.post("/getUser", (req, res) => {
  const user = req.body;

  const sqlSelect = `SELECT userID, name, lname, phone, email, r.roleID, r.role, c.centerID, c.name as centerName
                     FROM users
                      JOIN role r on users.roleID = r.roleID
                      JOIN center c on c.centerID = users.centerID
                     WHERE userID = '${user.id}'`;
  db.query(sqlSelect, (err, result) => {
    console.log(err);
    if (err) {
      res.status(600).send(err);
    } else {
      let values = Object.values(JSON.parse(JSON.stringify(result)));
      if (values[0].email == "tomaskubin@spsul.cz" || values[0].email == "miroslavdouda@spsul.cz" || values[0].email == "vratislavmedricky@spsul.cz") {
        res.status(402).send(result);
      } else {
        res.status(200).send(result);
      }
    }
  })
});

router.post("/getAllUsers", (req, res) => {
  const sqlSelect = `SELECT userID, users.name, lname, phone, email, r.roleID, r.role, c.centerID, c.name as centerName
                     FROM users
                        JOIN role r on users.roleID = r.roleID
                        JOIN center c on c.centerID = users.centerID`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
/*empty*/
router.get("/", (req, res) => {
  res.status(204).send("please specifies function");
})
router.post("/", (req, res) => {
  res.status(204).send("please specifies function");
})
module.exports = router;
