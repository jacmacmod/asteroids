const { schema } = require("./knex")

exports.up = function(knex) {
    return knex.sxhema.createTable('items', function(table) {
        table.increment("id");
        table.string("name");
        table.float("diamter_in_meters");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('items');
};