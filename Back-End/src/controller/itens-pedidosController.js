const connection = require('../database/connection');


module.exports = {
  async create (req, resp){

    const { preco_unitario, qtd, preco_total}
    const pedido_id = req.header.authorization;
    const produto_id = req.header.rastreamento;



    const [ id ] = await connection('entrega').insert({
        pedido_id,
        produto_id,
        qtd,
        preco_unitario,
        preco_total,
        
        
    });
      return resp.json({ id });

  },
}