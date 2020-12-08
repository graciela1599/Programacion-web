/// Importando la conexión de la BD
const connection = require('../config/connection');

function listar(req, res) {
    if (connection) {
        let sql = 'SELECT p.id, titulo, director, anio, g.genero FROM peliculas p INNER JOIN generos g ON p.genero = g.id ';
        connection.query(sql, (err, pelicula) => {
            if (err) {
                res.json(err);
            } else {
                console.log(pelicula);
                res.json(pelicula);
            }
        })
    }
}

function visualizar(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = `SELECT p.id, titulo, director, anio, g.genero FROM peliculas p 
                    INNER JOIN generos g ON p.genero = g.id  WHERE p.genero = ${connection.escape(id)}`;
        connection.query(sql, (err, pelicula) => {
            if (err) {
                res.json(err);
            } else {
                console.log(pelicula);
                res.json(pelicula);
            }
        })
    }
}

function pelicula(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = `SELECT * FROM PELICULAS WHERE id = ${connection.escape(id)}`;
        connection.query(sql, (err, pelicula) => {
            if (err) {
                res.json(err);
            } else {
                console.log(pelicula);
                res.json(pelicula);
            }
        })
    }
}

function agregar(req, res) {
    if (connection) {
        const pelicula = req.body;

        if (!pelicula.titulo) {
            return res.status(400).send({ error: true, mensaje: "El titulo es obligatorio" });
        }
        if (!pelicula.director) {
            return res.status(400).send({ error: true, mensaje: "El director es obligatorio" });
        }
        if (!pelicula.anio) {
            return res.status(400).send({ error: true, mensaje: "El año es obligatorio" });
        }
        if (pelicula.anio && pelicula.anio.length != 4) {
            console.log(pelicula.anio);
            return res.status(400).send({ error: true, mensaje: "El año debe ser un numero de cuatro digitos" });
        }
        if (pelicula.titulo && pelicula.titulo.length > 120)
            return res.status(400).send({ error: true, mensaje: "El titulo debe ser menor a 120 caracteres" });

        if (pelicula.director && pelicula.director.length > 100) {
            return res.status(400).send({ error: true, mensaje: "El director debe ser menor a 120 caracteres" });
        }
        let sql = 'INSERT INTO PELICULAS set ? ';
        connection.query(sql, [pelicula], (err, row) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ error: false, data: row, mensaje: "Pelicula agregada con éxito" })
            }
        })
    }
}

function editar(req, res) {
    if (connection) {
        const { id } = req.params;
        const pelicula = req.body;

        console.log("Hola", pelicula, pelicula.anio);
        if (!pelicula.titulo) {
            return res.status(400).send({ error: true, mensaje: "El titulo es obligatorio" });
        }
        if (!pelicula.director) {
            return res.status(400).send({ error: true, mensaje: "El director es obligatorio" });
        }
        if (!pelicula.anio) {
            return res.status(400).send({ error: true, mensaje: "El año es obligatorio" });
        }
        if (pelicula.anio && pelicula.anio.length !== 4) {
            return res.status(400).send({ error: true, mensaje: "El año debe ser un numero de cuatro digitos" });
        }
        if (pelicula.titulo && pelicula.titulo.length > 120)
            return res.status(400).send({ error: true, mensaje: "El titulo debe ser menor a 120 caracteres" });

        if (pelicula.director && pelicula.director.length > 100) {
            return res.status(400).send({ error: true, mensaje: "El director debe ser menor a 120 caracteres" });
        }
        let sql = "UPDATE PELICULAS set ? WHERE ID = ?";


        connection.query(sql, [pelicula, id], (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                let mensaje = "";
                mensaje = (rows.changedRows === 0) ? "La información es la misma" : "Se ha modificado el registro";
                res.json({ error: false, data: rows, mensaje });
            }
        })
    }
}

function eliminar(req, res) {
    if (connection) {
        const { id } = req.params;
        // LLEGO AQUI
        let sql = 'DELETE FROM peliculas WHERE id = ?';
        console.log(id, sql);
        connection.query(sql, [id], (err, resultado) => {
            console.log(id, sql, resultado, err);
            if (err) {
                res.json(err);
            } else {
                let mensaje = (resultado.affectedRows === 0) ? "Pelicula no encontrada" : "Pelicula eliminada con éxito";
                res.json({ error: false, resultado, mensaje });
            }
        })
    }

}

module.exports = {
    listar,
    agregar,
    editar,
    visualizar,
    pelicula,
    eliminar
}