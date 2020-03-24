
exports.up = function(knex) {
    return knex.schema.createTable('casos', function(table){
        //primary key
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();

        //chave estrangeira com relacionamento com a tabela ongs
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
  knex.schema.dropTable('casos');
};
