require("dotenv").config();
const config = require("../knexfile");
const knex = require("knex");
const db = knex(config);

const items = [
    {
        id:1,
        name: 'Cactus',
        diameter_in_meters: 1, 
    },
    {
        id:2,
        name: 'Fridge',
        diameter_in_meters: 3, 
    },
    {
        id:3,
        name: 'Truck',
        diameter_in_meters: 20, 
    },
    {
        id:4,
        name: 'Airplane',
        diameter_in_meters: 50, 
    },
    {
        id:5,
        name: 'City Block',
        diameter_in_meters: 50, 
    },
    {
        id:6,
        name: 'Mori Tower',
        diameter_in_meters: 230, 
    }
];
const importItems = async () => {
    try {
       for (let item of items){
         const id = item.id;
         const name = item.name;
         const diameter_in_meters = item.diameter_in_meters;
         await db('items').insert({
            id,
            name,
            diameter_in_meters,
 
        });
       }
    return;
        }
    catch (err) {
       console.error("error inserting items to compare to asteroids☄️", err)
        }
  }

  module.exports = importItems;

