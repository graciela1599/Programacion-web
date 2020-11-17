/// Importando la conexión de la BD
const connection = require('../config/connection');

function listar(req, res) {
    if (connection) {
        let sql = 'select * from personas';
        connection.query(sql, (err, personas) => {
            if (err) {
                res.json(err);
            } else {
                console.log(personas);
                res.json(personas);
            }
        })
    }
}

function obtenerPersona(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = `select * from personas where id= ${connection.escape(id)}`;
        connection.query(sql, (err, persona) => {
            if (err) {
                res.json(err)
            } else {
                let mensaje = "";
                if (persona === undefined || persona.length === 0)
                    mensaje = "persona no encontrada"
                    // data --> donde se encuentran los resultados... Tu decides el nombre
                res.json({ error: false, data: persona, mensaje: mensaje })
            }
        })
    }
}

function crear(req, res) {
    if (connection) {
        const persona = req.body;

        if (!persona.nombre) {
            return res.status(400).send({ error: true, mensaje: "El nombre es obligatorio" });
        }

        if (persona.telefono && persona.telefono.length != 10) {
            return res.status(400).send({ error: true, mensaje: "El telefono debe ser 10 caracteres" });
        }
        let sql = 'INSERT INTO PERSONAS set ?';
        connection.query(sql, [persona], (err, row) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ error: false, data: row, mensaje: "Persona creada con exito" });
            }
        });
    }
}

function editar(req, res) {
    if (connection) {
        const { id } = req.params;
        const personas = req.body;
        let sql = "UPDATE PERSONAS set ? where id = ?";
        connection.query(sql, [personas, id], (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                let mensaje = "";
                mensaje = (rows.changedRows === 0) ? "La información es la misma" : "Se ha modificado el registro";
                res.json({ error: false, data: rows, mensaje });
            }
        });
    }
}

function eliminar(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = "DELETE FROM PERSONAS WHERE id = ?";
        connection.query(sql, [id], (err, resultado) => {
            if (err) {
                res.json(err);
            } else {
                let mensaje = (rows.affectedRows === 0) ? "Persona no encontrada" : "Persona eliminada con éxito";
                res.json({ error: false, resultado, mensaje });
            }
        })
    }

}
module.exports = {
    listar,
    obtenerPersona,
    crear,
    editar,
    eliminar
}