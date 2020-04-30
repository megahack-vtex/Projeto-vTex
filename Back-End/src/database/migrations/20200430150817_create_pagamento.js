
exports.up = function(knex) {
  return knex.schema.createTable('pagamento', function (table){
      table.integer('id_Pagamento', 20).primary();
      table.string('tipo_pagamento', 20).notNullable();
      table.string('status', 20).notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('pagamento');
};
