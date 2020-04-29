
exports.up = function(knex) {
  return knex.schema.createTable('rastreamento', function (table){
    table.integer('Id_ratreamento', 10).notNullable();
    table.string('status',20).notNullable();
  });
   
  
};

exports.down = function(knex) {
 return knex.schema.dropTable('rastreamento');
};
