const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {async create (req,resp){

  const { nome, cnpj, endereco, bairro, cidade, estado,telefone, celular,nota} = req.body;

  const id =  crypto.randomBytes(4).toString('DEC');

  await connection('comerciante').insert({
     id,
     nome,
     cnpj,
     endereco,
     bairro,
     cidade,
     estado,
     telefone,
     celular,
     nota,
  })
return resp.json({ id });
},
async index (req,resp){ 
const comerciante = await connection('comerciante').select('*');
  
    return resp.json(comerciante);
  },

  // para encontrar melhores lugar com notas iguais ou maiores que 5
   async busca(req,resp){
     const comercio = await connection('comerciante').select('*').where('nota','>=',5);

     return resp.json(comercio);
   },

 




};