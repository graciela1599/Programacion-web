const express = require("express");
const routes = express.Router();

const peliculasController = require('../controllers/peliculasController');

routes.get('/peliculas', peliculasController.listar);

routes.get('/peliculas/:id', peliculasController.visualizar);

routes.get('/pelicula/:id', peliculasController.pelicula);

routes.post('/peliculas', peliculasController.agregar);

routes.put('/peliculas/:id', peliculasController.editar);

routes.delete('/peliculas/:id', peliculasController.eliminar);




module.exports = routes;