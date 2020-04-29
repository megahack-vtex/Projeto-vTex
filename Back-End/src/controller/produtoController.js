const connection = require('../database/connection');

module.exports = {
  async create (req, resp){
    const {nome , foto, preco_custo, preco_venda, status}
    const comerciante_id = req.headers.authorization;
    
    
    const [id] = await connection('produto').insert({
        nome,
        foto,
        preco_custo,
        preco_venda,
        comerciante_id,
        status
    });

    return resp.json({ id });
  },
  
}