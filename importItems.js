require("dotenv").config();
const db = require("./knexfile");

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
         const diamater_in_meters = item.diamater_in_meters;
         const itemData = await db('items').insert({
            id,
            name,
            diamater_in_meters,
 
        });
        console.log(itemData)
       }
    return;
        }
    catch (err) {
       console.error("error inserting items to compare to asteroids☄️", err)
        }
  }

  module.exports = importItems;

