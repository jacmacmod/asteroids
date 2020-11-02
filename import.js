
const db = require("./knex");
const axios = require('axios');
require("dotenv").config();

function createNASAURL() {
    let today =  new Date();
    let yesterday =  new Date(today);
    yesterday.setDate(yesterday.getDate() - 1)
    const ISOTODAY = today.toISOString().split('T')[0];
    const ISOYESTERDAY = yesterday.toISOString().split('T')[0]; 
    return `https://api.nasa.gov/neo/rest/v1/feed?start_date=${ISOYESTERDAY}&end_date=${ISOTODAY}&api_key=${process.env.NASA_API_KEY}`;
}

const getAsteroids = async (url) => {
    const {data: asteroids} = await axios.get(url)
    console.log(asteroids)
    return asteroids;
}


  
getAsteroids(createNASAURL());


 const seedAsteroids = async () => {
 try {
    getAsteroids(createNASAURL());
   }
   catch (err) {
       console.error("error inserting asteroids from NASA☄️", err)
   }

  }


  module.exports = seedAsteroids;

