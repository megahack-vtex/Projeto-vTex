const express = require('express');
const clienteController = require('./controller/clienteController');
const comercianteController = require('./controller/comercianteController');
const produtoController = require('./controller/produtoController');



const routes = express.Router();

routes.get('/cliente',clienteController.index);
routes.post('/cliente',clienteController.create);

routes.get('/comerciante',comercianteController.index);
routes.post('/comerciante',comercianteController.create);


routes.post('/produto',produtoController.create);



module.exports = routes;