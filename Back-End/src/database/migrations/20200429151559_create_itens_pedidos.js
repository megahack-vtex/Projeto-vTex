
exports.up = function(knex) {
  return knex.schema.createTable('itens_pedidos', function (table){
    table.integer('ID_pedido',20).notNullable();
    table.string('ID_produto', 20).notNullable();
    table.float('Preco_unitario', 8, 2).notNullable();
    table.float('Preco_Total', 8, 2).notNullable();
    
    table.foreign('ID_pedido').references('id_pedido').inTable('pedido');
    table.foreign('ID_produto').references('id_produto').inTable('produto');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('itens_pedidos');
};
