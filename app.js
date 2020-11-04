const knex = require("knex");
const config = require("./knexfile");
const db = knex(config);
const app = require("./server");

const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running migrations");
    await db.migrate.latest()
      .then(function() {
        return db.seed.run()
    }).then(function() {
      console.log("seeds were successful")
    });
    console.log("----running express server-----")
    app.listen(PORT, ()  => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error migrateing and seeding!", err);
    process.exit(-1);
  }
})();
