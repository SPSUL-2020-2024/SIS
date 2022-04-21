const express = require("express");
const router = express.Router();

var db = require('../db');

router.post("/getAllPosts", (req, res) => {
  const sqlSelect = "SELECT * FROM posts";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

router.post("/getPriorities", (req, res) =>{
  const sqlSelect = "SELECT * FROM priority";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
})
router.post("/getCenters", (req, res) =>{
  const sqlSelect = "SELECT * FROM center";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
})

/*empty*/
router.get("/", (req, res) => {
  res.status(204).send("please specifies function");
})
router.post("/", (req, res) => {
  res.status(204).send("please specifies function");
})

module.exports = router;
