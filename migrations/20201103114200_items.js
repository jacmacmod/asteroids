exports.up = function(knex) {
    return knex.schema.hasTable('itemss').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('items', function (table) {
        table.integer("id");
        table.string("name");
        table.integer("diamter_in_meters");
    })
}
})
};

exports.down = function(knex) {
    return knex.schema.dropTable('items');
};