const express = require("express");
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const db = require("./db")

app.use(cors());
app.use(express.json());

const UserApi = require("./routes/UserApi");
app.use("/UserApi", UserApi)

const PostApi = require("./routes/PostApi");
app.use("/PostApi", PostApi)

app.use(verifyToken)

app.use(bodyParser.urlencoded({ extented: true }));
app.use(express.urlencoded({ extended: true }));

function verifyToken(req, res, next){
  if(!req.headers.authorization){
    return res.status(401).send("Unauthorized request")
  }
  let token = req.headers.authorization.split(" ")[1]
  if(token == null){
    return res.status(401).send("Unauthorized request")

  }
  let payload = jwt.verify(token, "secretKey")
  if(!payload){
    return res.status(401).send("Unauthorized request")
  }
  req.userId = payload.subject
  next();

}

var listener = app.listen(25795, () => {
  console.log("Listening on port " + listener.address().port);
  db.getConnection(function(err, connection) {
    if (err === undefined) {
      console.log("An error occurred while connecting to the database!");
    } else {
      console.log("Successfully connected to the database.");
    }
  });
});

/*empty*/
app.get("/", (req, res) => {
  res.status(204).send("please specifies function");
})
app.post("/", (req, res) => {
  res.status(204).send("please specifies function");
})

