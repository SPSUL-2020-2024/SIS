const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const crypto = require("crypto")

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
                     WHERE userID = ${user.id}`;
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
                        JOIN center c on c.centerID = users.centerID
                     ORDER BY lname`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});


/*hash*/
router.get("/cryp",(req, res) => {
  const sqlSelect = `SELECT userID, password FROM users`;
  db.query(sqlSelect, (err, result) => {
    for (const res of result) {
      var resultArray = Object.values(JSON.parse(JSON.stringify(res)))
      console.log(resultArray[0] + " " + resultArray[1])
      let pass = crypt(resultArray[1])
      const sqlUpdate = `UPDATE users SET password = '${pass}' where userID = ${resultArray[0]}`
      db.query(sqlUpdate, (err, result) => {
          console.log(err + " " + result)
      })
    }
    res.send("done")
  });



})

router.post("/try", (req, ress)=> {
  sql = "SELECT userID, password FROM users where userID = 1"
  db.query(sql, (err, res)=> {
    pass = "Admin"
    salt = crypto.randomBytes(16).toString('hex');
    var hash = crypto.pbkdf2Sync(pass,
        salt, 1000, 64, `sha512`).toString(`hex`);
    var resultArray = Object.values(JSON.parse(JSON.stringify(res)))
    if(hash == resultArray[1] ){
      ress.send("success")
    }else{
      ress.send("fail")
    }
  })
})

function crypt(password) {

  let salt = crypto.randomBytes(16).toString('hex');

  let hash = crypto.pbkdf2Sync(password, salt,
      1000, 64, `sha512`).toString(`hex`);

  return hash
};
/**/

/*empty*/
router.get("/", (req, res) => {
  res.status(204).send("please specifies function");
})
router.post("/", (req, res) => {
  res.status(204).send("please specifies function");
})

module.exports = router;
