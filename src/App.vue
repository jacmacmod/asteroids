<template>
  <div id="app">
    <!-- selector area -->

    <div class="header-wrapper">
      <select v-model="selectedAsteroid">
        <option disabled value="">Choose an Asteroid☄️</option>
        <option v-for="asteroid of asteroids" :key="asteroid">
          {{ asteroid.name }}
        </option>
      </select>
      <button v-on:click="compare">COMPARE</button>
    </div>
    <!-- results -->
    <div v-if="start" class="compare-wrapper">
      <div class="compare-item">
        <img :src="photos[1].photo" />
      </div>

      <div class="compare-item">
        <img class="scaledObject" :src="EarthPhoto" :style="cssProps" />
      </div>
      <!-- <div class="compare-object"> -->
      <ul class="compare-item">
        <li>{{ selectedAsteroid }}</li>
        <li>{{ AsteroidDiameter }} m</li>
      </ul>
      <!-- </div> -->

      <ul class="compare-item">
        <li>{{ EarthObject.name }}</li>
        <li>{{ EarthObject.diameter_in_meters }} m</li>
      </ul>
    </div>

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
import { asteroidNamesAndSize, closestObjectToAsteroid } from '../utils';
let airplane = require('./assets/airplane.png');
let asteroid = require('./assets/asteroid.png');
let cactus = require('./assets/cactus.png');
let fridge = require('./assets/fridge.png');
let soccer = require('./assets/soccer.png');
let truck = require('./assets/truck.png');
let building = require('./assets/building.png');

export default {
  name: 'App',
  data: () => ({
    asteroids: [1, 2, 3],
    scale: 1,
    photos: [
      { photo: airplane, name: 'Airplane' },
      { photo: asteroid, name: 'Asteroid' },
      { photo: building, name: 'Mori Tower' },
      { photo: cactus, name: 'Cactus' },
      { photo: fridge, name: 'Fridge' },
      { photo: soccer, name: 'Soccer Field' },
      { photo: truck, name: 'Truck' },
    ],
    selectedAsteroid: '',
    asteroid: '',
    EarthObject: '',
    EarthPhoto: '',
    AsteroidDiameter: ';',
    start: false,
  }),
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

  computed: {
    cssProps() {
      return {
        '--objectScale': this.scale,
      };
    },
  },
};
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  background-color: chocolate;
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
.compare-wrapper {
  display: grid;
  background-color: slateblue;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;

  justify-items: center;
  align-items: stretch;
}

.compare-item {
  display: flex;
  justify-self: center;
  flex-direction: column;
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

.scaledObject {
  transform: scale(var(--objectScale)); /* Equal to scaleX(0.7) scaleY(0.7) */
}
/* TODO media query truck are really big on full screen */
</style>
