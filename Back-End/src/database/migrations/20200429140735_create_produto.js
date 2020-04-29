
exports.up = function(knex) {
  return knex.schema.createTable('produto', function (table){
    table.integer('id_produto', 20).primary();
    table.string('nome',50).notNullable();
    table.blob('foto_produto').notNullable();
    table.float('preco_custo', 8, 2).notNullable();
    table.float('preco_venda', 8, 2).notNullable();
    table.integer('ID_comerciante', 20).notNullable();
    table.string('status', 10).notNullable();


    table.foreign('ID_comerciante').references('id_comerciante').inTable('comerciante');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('produto');
};
