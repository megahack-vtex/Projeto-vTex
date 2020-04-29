
exports.up = function(knex) {
  return knex.schema.createTable('cliente', function (table){
    table.integer('id_cliente', 20).primary();
    table.string('nome',50).notNullable();
    table.integer('CPF', 20).notNullable();
    table.blob('foto_cliente').notNullable();
    table.string('endereco', 50).notNullable();
    table.string('bairro', 30).notNullable();
    table.string('cidade', 30).notNullable();
    table.string('estado', 2).notNullable();
    table.integer('telefone', 10).notNullable();
    table.integer('celular', 10).notNullable();
    table.string('email', 50).notNullable();
    table.string('status', 10).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cliente');
};
