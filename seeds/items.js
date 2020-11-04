import {seedItems} from "../seedFiles/importItems"
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return seedItems().then(function(){
        console.log("items were seeds successfully")
      });
    });
};
