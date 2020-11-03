exports.up = function(knex) {
    return knex.schema.hasTable('items').then(function (exists) {
        if (!exists) {
        return knex.schema.createTable('items', function (table) {
        table.integer("id");
        table.string("name");
        table.integer("diameter_in_meters");
    })
}
})
};

exports.down = function(knex) {
    knex.schema.dropTable('items');
};