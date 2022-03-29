const express = require("express");
const mysql = require("mysql");
const router = express.Router();

var db = require('../db');

router.get("/", (req, res) => {
  res.status(204).send("please specifies function");
})

router.post("/getUser", (req, res) => {
  const user = req.body;

  const sqlSelect = `SELECT userID, name, lname, phone, email, roleID, centerID
                     FROM users
                     WHERE userID = '${user.id}'`;
  db.query(sqlSelect, (err, result) => {
    console.log(err);
    if (err) {
      res.status(600).send(err);
    } else {
      values = Object.values(JSON.parse(JSON.stringify(result)));
      if (values[0].email == "tomaskubin@spsul.cz" || values[0].email == "miroslavdouda@spsul.cz" || values[0].email == "vratislavmedricky@spsul.cz") {
        res.status(402).send(result);
      } else {
        res.status(200).send(result);
      }
    }
  })
});

router.post("/getAllUsers", (req, res) => {
  const sqlSelect = "SELECT userID, name, lname, phone, email, roleID, centerID FROM users";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
