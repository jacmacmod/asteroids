const seedAsteroids = require("../seedFunctions/importAsteroids");
exports.seed = function (knex) {
  return knex("asteroids")
    .del()
    .then(function () {
      return seedAsteroids();
    })
    .then(function () {
      console.log("Asteroids were seeded successfully.");
    });
};
