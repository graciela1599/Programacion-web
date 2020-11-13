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

                res.json({ error: false, data: persona, mensaje: mensaje })
            }
        })
    }
}

module.exports = {
    listar,
    obtenerPersona
}