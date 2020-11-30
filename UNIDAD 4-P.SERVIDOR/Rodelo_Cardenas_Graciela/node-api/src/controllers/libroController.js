const connection = require('../config/connection');


function obtenerLibros(req, res) {
    if (connection) {
        let sql = 'select * from libros';
        connection.query(sql, (err, libros) => {
            if (err) {
                res.json(err);
            } else {
                console.log(libros);
                res.json(libros);
            }
        })
    }
}

function agregar(req, res) {
    if (connection) {
        const libro = req.body;
        console.log(libro);

        if (libro.aniopub && libro.aniopub.length != 4) {
            return res.status(400).send({ error: true, mensaje: "El año de publicación debe ser de 4 digitos" });
        }

        let sql = 'INSERT INTO libros set ? ';
        connection.query(sql, [libro], (err, row) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ error: false, data: row, mensaje: "Libro agregado con exito." });
            }
        });
    }
}

module.exports = {
    obtenerLibros,
    agregar
}