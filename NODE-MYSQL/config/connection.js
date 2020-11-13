const mysql = require('mysql');

const objectConnection = {
    "host": "127.0.0.1",
    "port": 3306,
    "user": "root",
    "password": "1431",
    "database": "CRUD_NODE2"
};

const myCon = mysql.createConnection(objectConnection);

myCon.connect((err) => {
    if (err) {
        console.log("Ha ocurrido un error", err);
    } else {
        console.log("Base de datos conectada");
    }
});

module.exports = myCon;