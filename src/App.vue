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
<div class="comparison-area">
  <div class="asteroid" >{{selectedAsteroid}}</div>
  <div class="asteroid scaledObject" :style="cssProps">{{EarthObject.name}} </div>
</div>
<h2>{{scale}}</h2>
  </div>
</template>

<script>
import {asteroidNamesAndSize, closestObjectToAsteroid} from "../utils";

export default {
  name: 'App',
  data: () => ({
    asteroids: [1,2,3],
    scale: 2,
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 60px;
}
.comparions-area {
  display: grid;
  grid-template-columns: 150px 150px 150px;
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
