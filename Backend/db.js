const mysql = require("mysql");

const db = mysql.createPool({
	host: "91.224.90.56",
	user: "u10_0mYakItBYz",
	password: "8OsjAE.O4H^UKtEDDzlQDUc^",
	database: "s10_spsul_sis",
});

module.exports = db;
