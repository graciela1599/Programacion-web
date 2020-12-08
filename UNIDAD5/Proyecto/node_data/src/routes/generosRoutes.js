const express = require("express");
const routes = express.Router();

const generoController = require('../controllers/generosController');

routes.get('/genre', generoController.listarGenero);

routes.post('/genre', generoController.agregarGenero);

routes.delete('/genre/:id', generoController.eliminar);

module.exports = routes;