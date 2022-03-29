const express = require("express")
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

app.use(bodyParser.urlencoded({ extented: true }));
app.use(express.urlencoded({ extended: true }));

var listener = app.listen(25795, () => {
  console.log("Listening on port " + listener.address().port);
  db.getConnection(function(err, connection) {
    if (err === undefined) {
      console.log("An error occurred while connecting to the database!");
      console.log(err);
    } else {
      console.log("Successfully connected to the database.");
    }
  });
});

app.get("/", (req, res) => {
  res.status(204).send("please specifies function");
})

