<template>
  <div id="app">


<div class="header">
  <button v-on:click="compare">COMPARE</button>
  <select v-model="selectedAsteroid" >
  <option disabled value="">Please select Asteroid☄️</option>
  <option v-for="asteroid of asteroids" :key="asteroid" >{{asteroid.name}}
  </option>
</select>

<div> 
 selected Asteroid: {{selectedAsteroid}}
</div>
<div> 
  Closest Object: {{EarthObject}}
</div>


</div>

<div class="comparison-area">
  <div class="asteroid" >{{selectedAsteroid}}</div>
  <div class="asteroid scaledObject" :style="cssProps">{{EarthObject.name}} </div>
</div>
<h2>{{EarthObject.name}} is {{scale}} times the size of the Asteroid {{selectedAsteroid}}</h2>
  </div>
</template>

<script>
import {asteroidNamesAndSize, closestObjectToAsteroid} from "../utils";

export default {
  name: 'App',
  data: () => ({
    asteroids: [1,2,3],
    scale: 1.1,
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
        for (let asteroid of this.asteroids) {
          if(asteroid.name === this.selectedAsteroid){
            this.scale = asteroid.diameter_in_meters_min / this.EarthObject.diameter_in_meters;
          }
        }
      });
    },
  

  },
  computed: {
    cssProps() {
      return {
        '--objectScale': this.scale,
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
  background-color: #3b404e;
  color: white;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.header {
  grid-row: 1 / 2;
  grid-column: 1 / 4;
}

.comparions-area {
  grid-row: 1 / 2;
  grid-column: 1 / 4;
}
.asteroid {
  margin: 100px;
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaledObject {
  transform: scale(var(--objectScale)); /* Equal to scaleX(0.7) scaleY(0.7) */
  background-color: var(--j);
}

</style>
