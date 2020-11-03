<template>
  <div id="app">


    ☄️ ☄️ ☄️ ☄️ ☄️ ☄️ ☄️ ☄️
  <button v-on:click="compare">COMPARE</button>

<select v-model="selectedAsteroid">
  <option disabled value="">Please select Asteroid☄️</option>
  <option v-for="name of asteroidNames" :key="name" >
 {{name}}
  </option>
</select>

<div> 
 selectedAsteroid: {{ selectedAsteroid }}
</div>
<div> 
  Closest Object: {{EarthObject}}
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
import {asteroidNames, closestObjectToAsteroid} from "../utils";

export default {
  name: 'App',
  data: () => ({
    asteroidNames: [1,2,3],
    selectedAsteroid: "",
    EarthObject: "",
    jack: "jack",
  }),
  mounted() {
  asteroidNames().then((data) => {
    console.log(data)
    this.asteroidNames=data;
  });
  },
  methods: {
    compare() {
      console.log("here");
      console.log(this.jack,this.selectedAsteroid );
      closestObjectToAsteroid(this.selectedAsteroid)
      .then((data) => {
        this.EarthObject = data;
        console.log(data + "in front end now")

      });
    },

  }
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
</style>
