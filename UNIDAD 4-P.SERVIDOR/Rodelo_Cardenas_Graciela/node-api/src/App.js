const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

// Configuración del puerto
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base de datos 
require('./config/connection');

app.use(require('./routes/libroRoute'));

// Ruta sencilla
app.get('/', (req, res) => {
    res.json({ mensaje: "Hola a todos" });
});


// Levantar servidors
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log("Ha ocurrido un error: ", error);
    } else {
        console.log("Servidor en puerto: ", app.get('port'));
    }
});