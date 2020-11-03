import axios from "axios";

export const asteroidNamesAndSize = async () => {
    const { data: asteroids } = await axios.get(`/api/asteroids/namesAndSize`);
    return asteroids;
  };

  export const closestObjectToAsteroid = async (name) => {
    const {data: closestObject} = await axios.get(`/api/closest/${name}`);
    return closestObject;
  }