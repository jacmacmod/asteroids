<template>
  <div id="app">


    ☄️ ☄️ ☄️ ☄️ ☄️ ☄️ ☄️ ☄️
  <button v-on:click="compare">COMPARE</button>

<select v-model="selectedAsteroid" >
  <option disabled value="">Please select Asteroid☄️</option>
  <option v-for="asteroid of asteroids" :key="asteroid" >
  {{asteroid.name}}
  </option>
</select>

<div> 
 selected Asteroid: {{selectedAsteroid}}
</div>
<div> 
  Closest Object: {{EarthObject}}
</div>

<div class="asteroid" >
</div>

<div class="asteroid scaledObject" :style="cssProps">
</div>

<!-- 
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="3"/>
</svg>
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="3"/>
</svg> -->
  </div>
</template>

<script>
import {asteroidNamesAndSize, closestObjectToAsteroid} from "../utils";

export default {
  name: 'App',
  data: () => ({
    asteroids: [1,2,3],
    scale: 45,
    selectedAsteroid: "",
    asteroid: "",
    EarthObject: "",
    jack: "jack",
  }),
  mounted() {
  asteroidNamesAndSize().then((data) => {
    this.asteroids=data;
  });
  },
  methods: {
    compare() {
      closestObjectToAsteroid(this.selectedAsteroid)
      .then((data) => {
        this.EarthObject = data;
        
      });
    },
  

  },
  computed: {
    cssProps() {
      return {
        '--objectScale': 4,
        '--j': "red",
    
      }
    }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.asteroid {
  display: grid inline-block;
  margin: 500px;
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaledObject {
  transform: scale(var(--objectScale)); /* Equal to scaleX(0.7) scaleY(0.7) */
  background-color: var(--j);
}

</style>
