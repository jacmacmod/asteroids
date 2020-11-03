exports.up = function (knex) {
    return knex.schema.hasTable('asteroids').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('asteroids', function (table) {
                table.integer('id');
                table.string('name');
                table.text('url');
                table.float('diameter_in_meters_min');
                table.boolean('is_hazardous');
                table.integer('kilometers_per_second');
                table.integer('miss_distance_lunar');
                table.string('orbiting_body');
            })
        }
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('asteroids');
};
