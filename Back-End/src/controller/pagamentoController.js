const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
  async create (req, resp) {
    
    const { tipo,status } = req.body;

    const id = crypto.randomBytes(2).toString('DEC');

    await connection('pagamento').insert({
       id,
       tipo,
       status
    });
    resp.json({ id });
  },
};