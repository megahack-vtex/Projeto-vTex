const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

  async create (req, resp){
    const {valor_total,total_pedido, status } = req.body;

    const id =  crypto.randomBytes(2).toString('DEC');  // criar um id com 2 bytes inteiro

    const comerciante_id = req.header.comercio;
    const cliente_id = req.header.cliente;
    const entrega_id = req.header.entrega;


    await connection('pedido').insert({
      id,
      cliente_id,
      comerciante_id,
      valor_total,
      entrega_id,
      total_pedido,
      status
    });
  return resp.json({ id });
  } 
};