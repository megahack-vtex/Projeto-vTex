const express = require('express');
const clienteController = require('./controller/clienteController');
const comercianteController = require('./controller/comercianteController');
const produtoController = require('./controller/produtoController');
const entregaController = require('./controller/entregaController');
const estoqueController = require('./controller/estoqueController');
const itenspedidosController = require('./controller/itens-pedidosController');
const pagamentoController = require('./controller/pagamentoController');
const pedidoController = require('./controller/pedidoController');
const rastreamentoController = require('./controller/rastreamentController');



const routes = express.Router();

routes.get('/cliente',clienteController.index);  // listagem de cliente 
routes.post('/cliente',clienteController.create); //criação de cliente

routes.get('/comerciante',comercianteController.index);  // listagem de comerciante 
routes.post('/comerciante',comercianteController.create);//criação de comerciante
routes.get('/comercio',comercianteController.busca);

routes.post('/produto',produtoController.create); //criação de produto
routes.get('/busca',produtoController.buscaValor);


routes.post('/estoque', estoqueController.create); //criação de estoque


routes.post('/itenspedidos', itenspedidosController.create); //criação de itens-pedidos


routes.post('/pagamento',pagamentoController.create); //criação de  pagamento


routes.post('/pedido', pedidoController.create); //criação de pedido


routes.post('/rastreamento', rastreamentoController.create);//criação de rastreamento

module.exports = routes;