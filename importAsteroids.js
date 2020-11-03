const knex = require("knex");
const config = require("./knexfile");
const db = knex(config);

const axios = require('axios');
require("dotenv").config();

let today =  new Date();
const ISOTODAY = today.toISOString().split('T')[0];

function createNASAURL() {
    return `https://api.nasa.gov/neo/rest/v1/feed?start_date=${ISOTODAY}&end_date=${ISOTODAY}&api_key=${process.env.NASA_API_KEY}`;
}

const getAsteroids = async (url) => {
    let {data: asteroids} = await axios.get(url)
    return  asteroids.near_earth_objects[ISOTODAY];
}

const seedAsteroids = async () => {
    try {
       let asteroidsFromNasa = await getAsteroids(createNASAURL());

       for (let asteroid of asteroidsFromNasa) {
        const id = Number(asteroid.id);
        const name = asteroid.name;
        const url = asteroid.nasa_jpl_url;
        const diameter_in_meters_min = Math.round(Number(asteroid.estimated_diameter.meters.estimated_diameter_min));
        const is_hazardous = asteroid.is_potentially_hazardous_asteroid;
        const kilometers_per_second = Math.round(Number(asteroid.close_approach_data[0].relative_velocity.kilometers_per_second));
        const miss_distance_lunar = Math.round(Number(asteroid.close_approach_data[0].miss_distance.lunar));
        const orbiting_body = asteroid.close_approach_data[0].orbiting_body;
        
        const asteroidData = await db('asteroids').insert({
            id,
            name,
            url,
            diameter_in_meters_min,
            is_hazardous,
            kilometers_per_second,
            miss_distance_lunar,
            orbiting_body,
        });
        //console.log(asteroidData)
        }
    return;
        }
    catch (err) {
       console.error("error inserting asteroids from NASA☄️", err)
        }
  }

  module.exports = seedAsteroids;

