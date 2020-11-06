<template>
  <div class="header-wrapper">
    <select v-model="selectedAsteroid">
      <option disabled value="">Choose an Asteroid☄️</option>
      <option v-for="asteroid of asteroids" :key="asteroid">
        {{ asteroid.name }}
      </option>
    </select>
    <button v-on:click="compare">COMPARE</button>
  </div>
</template>

<script>
import { asteroidNamesAndSize, closestObjectToAsteroid } from '../../utils';
export default {
  name: 'AsteroidSelector',
  //props: [],
  data: () => ({
    asteroids: [],
    scale: 1,
    selectedAsteroid: '',
    asteroid: '',
    EarthObject: '',
    EarthPhoto: '',
    AsteroidDiameter: ';',
    start: false,
  }),
  methods: {
    compare() {
      closestObjectToAsteroid(this.selectedAsteroid).then((data) => {
        this.EarthObject = data;
        for (let photo of this.photos) {
          if (photo.name === this.EarthObject.name) {
            this.EarthPhoto = photo.photo;
          }
        }
        for (let asteroid of this.asteroids) {
          if (asteroid.name === this.selectedAsteroid) {
            this.AsteroidDiameter = asteroid.diameter_in_meters_min;
            this.scale = (
              this.EarthObject.diameter_in_meters /
              asteroid.diameter_in_meters_min
            ).toFixed(2);
          }
        }
        this.start = true;
      });
    },
  },
  mounted() {
    asteroidNamesAndSize().then((data) => {
      this.asteroids = data;
    });
  },
};
</script>

<style>
header-wrapper {
  display: grid;
  background-color: thistle;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 18px;
  padding: 10px;
}
</style>
