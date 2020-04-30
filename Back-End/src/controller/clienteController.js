const crypto = require('crypto');
const connection = require('../database/connection');



module.exports = {
  // adicionar os clientes
  async create (req,resp){

    const { nome, cpf, foto, endereco, bairro, cidade, estado,telefone, celular,status } = req.body;

    const id =  crypto.randomBytes(2).toString('DEC');  // criar um id com 2 bytes inteiro

    await connection('cliente').insert({
       id,
       nome,
       cpf,
       foto,
       endereco,
       bairro,
       cidade,
       estado,
       telefone,
       celular,
       status,
    })
  return resp.json({ id });
  },

  // para lista os itens do banco
  async index (req,resp){

    const cliente = await connection('cliente').select('*');
  
    return resp.json(cliente);
  },
};