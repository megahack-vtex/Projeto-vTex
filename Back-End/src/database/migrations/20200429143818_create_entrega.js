
exports.up = function(knex) {
  return knex.schema.createTable('entrega', function (table){
    table.integer('id_entrega', 20).primary();
    table.integer('ID_pedido',20).notNullable();
    table.string('Tipo_entrga', 30).notNullable();
    table.float('Preco_entrega', 8, 2).notNullable();
    table.string('ID_pagamento',20).notNullable();
    table.integer('ID_rastreamento', 20).notNullable();

    table.foreign('ID_pedido').references('id_pedido').inTable('pedido');
    table.foreign('ID_rastreamento').references('id_rastreamento').inTable('rastreamento');
    table.foreign('ID_pagamento').references('id_pagamento').inTable('pagamento');
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('entrega');
};
