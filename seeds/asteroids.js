const seedAsteroids = require("../seedFunctions/importAsteroids");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('asteroids').del()
    .then(function () {
      // Inserts seed entries
      return seedAsteroids() 
    }).then(function(){
      console.log("asteroids were seeds successfully")
    });
};
