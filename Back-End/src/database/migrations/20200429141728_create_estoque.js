
exports.up = function(knex) {
  return knex.schema.createTable('Estoque', function (table){
    table.integer('Id_produto', 20).notNullable();
    table.string('nome',50).notNullable();
    table.integer('qtd_inicial', 10).notNullable();
    table.integer('qtd_atual', 10).notNullable();
    table.integer('ID_comerciante', 20).notNullable();
    table.string('status', 10).notNullable();


    table.foreign('ID_comerciante').references('id_comerciante').inTable('comerciante');
    table.foreign('Id_produto').references('id_produto').inTable('produto');
  });
};

exports.down = function(knex) {
 return  knex.schema.dropTable('estoque');
};
