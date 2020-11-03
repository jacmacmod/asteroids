const app = require("./server");
const knex = require("knex");

const config = require("./knexfile");
const db = knex(config);

const seedAsteroids = require("./importAsteroids");
const seedItems = require("./importItems")

const PORT = process.env.PORT || 9000;

(async () => {
  try {
     // delete table and data ??

     //then migrate 
    console.log("Running migrations");
    await db.migrate.latest();
     // then seed
    await seedAsteroids();
    console.log("asteroids table populated");

    await seedItems();
    console.log("items table populated");

    console.log("Starting express");
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
