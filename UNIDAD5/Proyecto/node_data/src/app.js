const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors())


app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.json({ mensaje: "Hola a todos" });
});
//Base de datos
require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas: Aquí se agregan las rutas
app.use(require('./routes/peliculasRoutes'));
app.use(require('./routes/generosRoutes'));

app.listen(app.get('port'), (error) => {
    if (error) {
        console.log("Ha ocurrido un error: ", error);
    } else {
        console.log("Servidor en puerto: ", app.get('port'));
    }
});