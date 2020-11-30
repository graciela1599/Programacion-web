const express = require('express');
const routes = express.Router();

// Importando el controlador de libros
const librosController = require('../controllers/libroController');

routes.get('/', librosController.obtenerLibros);

routes.post('/', librosController.agregar);

module.exports = routes;