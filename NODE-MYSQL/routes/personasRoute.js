const express = require('express');
const routes = express.Router();

// Importando el controlador de personas
const personasController = require('../controllers/personasController');

// Rutas

routes.get('/', personasController.listar);

routes.get('/:id', personasController.obtenerPersona);

module.exports = routes;