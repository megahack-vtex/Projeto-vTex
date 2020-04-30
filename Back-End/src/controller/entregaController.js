const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async create (req, resp){

    const {tipo , preco}
    const pedido_id = req.header.authorization;
    const rastreamento_id = req.header.rastreamento;

    const id = crypto.randomBytes(2).toString('DEC')


    const [ entrega ] = await connection('entrega').insert({
        id,
        pedido_id,
        tipo,
        preco,
        rastreamento_id,
        
        
    });
      return resp.json({ entrega });

  },
}