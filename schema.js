exports.up = function(knex){
    return knex.schema.createTable('asteroids', function(table) {

    })
}

exports.down = function(knex) {
    return knex.schema.dropTable("asteroids");
  };
  