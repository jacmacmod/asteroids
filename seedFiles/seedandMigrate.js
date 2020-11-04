const knex = require("knex");
const config = require("../knexfile");
const db = knex(config);


// const seedAsteroids = require("./importAsteroids");
// const seedItems = require("./importItems");

(async () => {
  try {
     // delete table and data ??

     //then migrate 
    console.log("Running migrations");
    await db.migrate.latest()
      .then(function () {
        return knex.seed.run()
    }).then(function(){
      console.log("seeds were successful")
    });
     // then seed
    // await seedAsteroids();
    // console.log("asteroids table populated");

    // await seedItems();
    // console.log("items table populated");

  } catch (err) {
    console.error("Error migrateing and seeding!", err);
    process.exit(-1);
  }
})();
