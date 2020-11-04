require("dotenv").config();
module.exports = {
    client: 'pg',
    connection: 
        process.env.HEROKU_POSTGRESQL_CHARCOAL_URL ||
        `postgres://${process.env.USER}@127.0.0.1:5432/asteroids`,
        searchPath: "public",
    migrations: "./migrations",
};    