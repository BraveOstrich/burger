var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "d13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "dnyd0lk075eoosdc",
    password: "okfudnvf951fa6q1",
    database: "z2esx5008hl3ebzq"
  })
}

// ==== Make connection ==== //
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// ==== Export connection for our ORM to use ==== //
module.exports = connection;