const knex = require("knex");
require("dotenv").config();

let knex = knex({
    client: 'pg',
    connection: 
        process.env.DATABASE_URL ||
        `postgres://${process.env.USER}@127.0.0.1:5432/asteroids`,
        searchPath: "public",
});

moudule.exports = db;