const express = require('express');

// Inicializar 
const app = express();

// Configuración
app.set('port', process.env.PORT || 3000);

// Rutas
app.get('/', (req, res) => {
    //res.send("Hello world")
    res.json({ mensaje: 'Hola a todos, vamoh a morir' })
})

// Levantar el servidor

app.listen(app.get('port'), (error) => {
    if (error) {
        console.log("Ha ocurrido un error:", error);
    } else {
        console.log("Servidor en puerto:", app.get('port'));
    }
})