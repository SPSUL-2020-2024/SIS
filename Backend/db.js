const mysql = require("mysql");

const db = mysql.createPool({
  host: "162.55.238.33",
  user: "u66_8ZxN6JjSIP",
  password: "09n@nZr@nXFO.QCmLBP1s31t",
  database: "s66_sis",
});

module.exports = db;
