const express = require("express");
const jwt = require("jsonwebtoken");
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

function verifyToken(req, res, next){
  if(!req.headers.authorization){
    return res.status(401).send("Unauthorized request")
  }
  let token = req.headers.authorization.split(" ")[1]
  if(token == 'null'){
    return res.status(401).send("Unauthorized request")
  }
  try {
    jwt.verify (token, 'secretKey', function(err, decoded){
      if(err){
        console.log(err)
        res.statusMessage = "error"
        return res.status(401).send(err)
      }
      if(decoded){
        req.userId = decoded.subject
        next ()
      }
    })

  } catch (err) {
    console.log(err)
    res.statusMessage = "error"
    return res.status(401).send(err)

  }

}
/*empty*/
router.post("/verifyToken", (req, res) =>{
  if(verifyToken){
    res.status(200).send()
  }else{
    res.status(401).send()
  }
})
router.post("/getUser", verifyToken, (req, res) => {
  const user = req.body;

  const sqlSelect = `SELECT userID, name, lname, phone, email, r.roleID, r.role, c.centerID, c.name as centerName
                     FROM users
                            JOIN role r on users.roleID = r.roleID
                            JOIN center c on c.centerID = users.centerID
                     WHERE userID = ${user.id}`;
  db.query(sqlSelect, (err, result) => {
    if(err){
      console.log("/getUser error:" + err)
    }
    res.send(result)
  })
});
router.post("/getMyData", verifyToken, (req, res) =>{
  token = req.headers.authorization.split(" ")[1];
  try{
    let payload = jwt.verify (token, 'secretKey')
    userId = payload.subject
    const sqlSelect = `SELECT userID, name, lname, r.roleID, r.role
                     FROM users
                            JOIN role r on users.roleID = r.roleID
                     WHERE userID = ${userId}`;
    db.query(sqlSelect, (err, result) => {
      res.status(200).send(result);
    });
  }catch (err){

  }

})

router.post("/getAllUsers",verifyToken, (req, res) => {
  const sqlSelect = `SELECT userID, users.name, lname, phone, email, r.roleID, r.role, c.centerID, c.name as centerName
                     FROM users
                            JOIN role r on users.roleID = r.roleID
                            JOIN center c on c.centerID = users.centerID
                     ORDER BY lname`;
  db.query(sqlSelect, (err, result) => {
    if(err){
      console.log("/getAllUsers error:" + err)
    }
    res.status(200).send(result);
  });
});

router.post("/verifyUser", (req, ress)=> {
  const user = req.body;
  console.log("user:"   + user.email)
  if(user.email){
    sql = `SELECT userID, password, salt FROM users where email = "${user.email}"`

    db.query(sql, (err, res)=> {
      pass = user.pass
      console.log(err)
      console.log(res)
      var resultArray = Object.values(JSON.parse(JSON.stringify(res)))
      salt = resultArray[0].salt.toString();

      var hash = crypto.pbkdf2Sync(pass,
          salt, 1000, 64, `sha512`).toString(`hex`);

      if(hash == resultArray[0].password ){
        const sqlSelect = `SELECT userID, name, lname, r.roleID, r.role
                         FROM users
                                JOIN role r on users.roleID = r.roleID
                         WHERE userID = ${resultArray[0].userID}`;
        db.query(sqlSelect, (err, res) => {
          let resultArray = Object.values(JSON.parse(JSON.stringify(res)))
          let payload = {subject:resultArray[0].userID}
          let token = jwt.sign(payload, "secretKey",{ expiresIn: 60 * 2 })
          let data = {
            "token" : token,
            "userData": resultArray
          }
          ress.status(200).send(data)
        })

      }else{
        ress.status(401).send("Unauthorized")
      }
    })
  }else{
    ress.status(418).send("data not found")
  }
})


/*functions*/
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
