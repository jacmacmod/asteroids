import axios from "axios";

export const asteroidNames = async () => {
    const { data: names } = await axios.get(`/api/asteroids/names`);
    let result = names.map(asteroid => {
        return asteroid.name
    })
    return result;
  };

  export const closestObjectToAsteroid = async (name) => {
    const {data: closestObject} = await axios.get(`/api/closest/${name}`);
    console.log(closestObject);
    return closestObject;
  }