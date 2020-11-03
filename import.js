
const db = require("./knex");
const axios = require('axios');
require("dotenv").config();

function createNASAURL() {
    let today =  new Date();
    const ISOTODAY = today.toISOString().split('T')[0];
    return `https://api.nasa.gov/neo/rest/v1/feed?start_date=${ISOTODAY}&end_date=${ISOTODAY}&api_key=${process.env.NASA_API_KEY}`;
}

const getAsteroids = async (url) => {
    const {data: asteroids} = await axios.get(url)
    asteroids = asteroids.near_earth_objects;
    let asteroidArr = [];
    for (let asteroid of asteroids) {
        asteroidObj = {};
        asteroidObj.id = asteroid.id;
        asteroidObj.name = asteroid.name;
        asteroidObj.nasa_jpl_url = asteroid.nasa_jpl_url;
        asteroidObj.diameter_in_meters_min = asteroid.estimated_diameter.meters.estimated_diameter_min;
        asteroidObj.is_hazardous = asteroid.is_potentially_hazardous_asteroid;
        asteroidObj.kilometers_per_second = asteroid.close_approach_data[0].relative_velocity.kilometers_per_second;
        asteroidObj.miss_distance_lunar = asteroid.close_approach_data[0].miss_distance.lunar;
        asteroidObj.orbiting_body = asteroid.close_approach_data[0].orbiting_body;
        asteroidArr.push(asteroidObj);

        //insert each object's data into database
    }
    // get array of objects and see database with each one.
  
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

