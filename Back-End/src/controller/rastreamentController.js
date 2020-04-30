const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
  async create (req, resp) {
    
    const { status } = req.body;

    const id = crypto.randomBytes(2).toString('DEC');

    await connection('rastreamento').insert({
       id,
       status
    });
    resp.json({ id });
  },
};