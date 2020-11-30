var mysql = require('mysql');
var connection = ({
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "1431",
    "database": "crud_2"
});

const myConn = mysql.createConnection(connection);

myConn.connect((err) => {
    if (err) {
        console.log("Ha ocurrido un error", err);
    } else {
        console.log("Base de datos conectada");
    }
})

module.exports = myConn;