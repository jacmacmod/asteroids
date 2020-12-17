const seedItems = require("../seedFunctions/importItems");
exports.seed = function (knex) {
  return knex("items")
    .del()
    .then(function () {
      return seedItems().then(function () {
        console.log("Items were seeds successfully.");
      });
    });
};
