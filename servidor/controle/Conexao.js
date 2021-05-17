const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dblancheria"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");
});

module.exports = con