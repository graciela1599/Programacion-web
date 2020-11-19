const express = require('express');
const routes = express.Router();

// Importando el controlador de personas
const personasController = require('../controllers/personasController');

// Funciones que utilizare dependiendo ruta que declare
// Rutas

routes.get('/', personasController.listar);

routes.get('/:id', personasController.obtenerPersona);

routes.post('/', personasController.crear);

routes.put('/:id', personasController.editar);

routes.delete('/:id', personasController.eliminar);
module.exports = routes;