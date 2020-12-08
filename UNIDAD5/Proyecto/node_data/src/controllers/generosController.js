/// Importando la conexión de la BD
const connection = require('../config/connection');

function listarGenero(req, res) {
    if (connection) {
        let sql = "SELECT * FROM GENEROS";
        connection.query(sql, (err, generos) => {
            if (err) {
                res.json(err);
            } else {
                console.log(generos);
                res.json(generos);
            }
        })
    }
}

function agregarGenero(req, res) {
    if (connection) {
        const genero = req.body;
        let sql = 'INSERT INTO generos set ? ';
        if (!genero.genero) {
            return res.status(400).send({ error: true, mensaje: "El nombre del género es obligatorio" });
        }
        if (genero.genero && genero.genero.length > 50) {
            return res.status(400).send({ error: true, mensaje: "La longitud del género debe ser menor a 50 caracteres" });
        }
        connection.query(sql, [genero], (err, row) => {
            if (err) {
                console.log(genero);
                res.json(err);
            } else {

                res.json({ error: false, data: row, mensaje: "Género agregado con éxito" })
            }
        })
    }
}

function eliminar(req, res) {
    if (connection) {
        const { id } = req.params;
        // LLEGO AQUI
        let sql = 'DELETE FROM generos WHERE id = ?';
        console.log(id, sql);
        connection.query(sql, [id], (err, resultado) => {
            if (err) {
                return res.status(400).send({ error: true, mensaje: "No se pudo eliminar el registro seleccionado. Tiene registros con películas." });
            } else {
                let mensaje = (resultado.affectedRows === 0) ? "Género no encontrado" : "Género eliminado con éxito";
                res.json({ error: false, resultado, mensaje });
            }
        })
    }

}
module.exports = {
    listarGenero,
    agregarGenero,
    eliminar
}