<template>
  <div id="app">
    <!-- selector area -->
    <!-- <asteroidSelector /> -->
    <div class="header-wrapper">
      <select v-model="selectedAsteroid">
        <option disabled value="">Choose an Asteroid☄️</option>
        <option v-for="asteroid of asteroids" :key="asteroid">
          {{ asteroid.name }}
        </option>
      </select>
      <button v-on:click="compare">COMPARE</button>
    </div>
    <comparison
      v-bind:Asteroid="selectedAsteroid"
      v-bind:scale="scale"
      v-bind:EarthObject="EarthObject"
      v-bind:AsteroidDiameter="AsteroidDiameter"
      v-bind:selectedAsteroid="selectedAsteroid"
      v-if="start"
      v-bind:EarthPhoto="EarthPhoto"
    />

    <div v-if="start">
      <h2>
        {{ EarthObject.name }} is {{ scale }} times the size of the Asteroid
        {{ selectedAsteroid }}
      </h2>
    </div>
    <div class="">
      👾 <a href="https://github.com/OnigiriJack/asteroids">GITHUB</a>
    </div>
  </div>
</template>

<script>
import Comparison from './components/Comparison';
//import AsteroidSelector from './components/AsteroidSelector';
import { asteroidNamesAndSize, closestObjectToAsteroid } from '../utils';
import { getPhotos } from './assets/photos';

export default {
  name: 'App',
  data: () => ({
    asteroids: [],
    scale: 1,
    photos: getPhotos(),
    selectedAsteroid: '',
    asteroid: '',
    EarthObject: '',
    EarthPhoto: '',
    AsteroidDiameter: ';',
    start: false,
  }),
  components: {
    comparison: Comparison,
    //// asteroidSelector: AsteroidSelector,
  },
  mounted() {
    asteroidNamesAndSize().then((data) => {
      this.asteroids = data;
    });
  },
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
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@500&display=swap');

body,
html {
  font-family: 'Turret Road', cursive;
  padding: 0;
  margin: 0;
  color: white;
  background: rgb(9, 13, 121);
  background: linear-gradient(
    90deg,
    rgba(9, 13, 121, 1) 0%,
    rgba(2, 0, 36, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}

.blank-on-start {
  display: none;
}

.header-wrapper {
  display: grid;
  background-color: thistle;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 18px;
  padding: 10px;
}

img {
  width: auto;
  margin-top: 23px;
  height: 50px;
}
h3 {
  font-size: 12px;
  padding-left: 5px;
}
button {
  border: 0.1em solid #ffffff;
}
ul {
  list-style: '🔸';
}

/* TODO media query truck are really big on full screen */
</style>
