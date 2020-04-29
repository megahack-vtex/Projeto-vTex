
exports.up = function(knex) {
  return knex.schema.createTable('pedido', function (table){
    table.integer('id_pedido', 20).primary();
    table.integer('ID_cliente',20).notNullable();
    table.integer('ID_comerciante', 20).notNullable();
    table.float('valor_total', 8 , 2).notNullable();
    table.integer('ID_entrega', 20).notNullable();
    table.integer('Total_ pedido', 10).notNullable();
    table.string('status', 10).notNullable();

    table.foreign('ID_comerciante').references('id_comerciante').inTable('comerciante');
    table.foreign('ID_cliente').references('id_cliente').inTable('cliente');
    table.foreign('ID_entrega').references('id_entrega').inTable('entrega');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pedido');
};
