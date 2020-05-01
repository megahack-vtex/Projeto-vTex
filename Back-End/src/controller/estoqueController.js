const connection = require('../database/connection');

module.exports = {
  async create (req, resp){

    const {nome,qtd_inicial, qtd_atual, status}
    const produto_id = req.header.authorization;
    const comerciante_id = req.header.comercio;


    const [ id ] = await connection('estoque').insert({
        produto_id,
        nome,
        qtd_inicial,
        qtd_atual,
        comerciante_id,
        status
        
    });
      return resp.json({ id });

  },
}