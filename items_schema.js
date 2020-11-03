const { schema } = require("./knex")

exports.up = function(knex) {
    return knex.sxhema.createTable('items', function(table) {

    })
};

exports.down = function(knex) {
    return schema.dropTable('items');
};