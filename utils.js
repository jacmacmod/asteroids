import axios from "axios";

export const asteroidNames = async () => {
    const { data: names } = await axios.get(`/api/asteroids/names`);
    let result = names.map(asteroid => {
        return asteroid.name
    })
    return result;
  };