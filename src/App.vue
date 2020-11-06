<template>
  <div id="app">
    <div class="title">
      <h1 class="title-child">Asteroid Comparison App</h1>

      <p>built with</p>
      <img class="logo" :src="nasaAPIphoto" />
      <p>{ APIs }</p>
    </div>
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
    <asteroidInfo
      v-if="start"
      v-bind:selectedAsteroid="selectedAsteroid"
      v-bind:EarthObject="EarthObject"
      v-bind:scale="scale"
    />

    <div class="">
      👾 <a href="https://github.com/OnigiriJack/asteroids">GITHUB</a>
    </div>
  </div>
</template>

<script>
import Comparison from './components/Comparison';
import AsteroidInfo from './components/Asteroidnfo';
//import AsteroidSelector from './components/AsteroidSelector';
import { asteroidNamesAndSize, closestObjectToAsteroid } from '../utils';
import { getPhotos } from './assets/photos';
import nasaAPIphoto from './assets/nasa-logo.png';

export default {
  name: 'App',
  data: () => ({
    asteroids: [],
    scale: 1,
    nasaAPIphoto: nasaAPIphoto,
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
    asteroidInfo: AsteroidInfo,
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
/* Reset Select */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: rgb(9, 13, 121);
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: 0.25em;
}
select {
  border: 0.1em solid #ffffff;
  flex: 1;
  padding: 0 0.5em;
  color: #fff;
  cursor: pointer;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: rgb(9, 13, 121);
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}
.title {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
}
.title-child {
  margin-left: 10px;
  margin-bottom: 0px;
}
.blank-on-start {
  display: none;
}

.header-wrapper {
  display: grid;
  background-color: rgb(177, 2, 2);
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 18px;
  padding: 10px;
}
.logo {
  width: auto;
  margin-top: 23px;
  height: 34px;
  margin-bottom: 10px;
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
  background: rgb(9, 13, 121);
  color: aliceblue;
}
ul {
  list-style: '🔺';
}

/* TODO media query truck are really big on full screen */
</style>
