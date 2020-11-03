<template>
  <div id="app">


    ☄️ ☄️ ☄️ ☄️ ☄️ ☄️ ☄️ ☄️
  <button>COMPARE</button>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>
{{asteroidNames}}
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="3"/>
</svg>
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="3"/>
</svg>
  </div>
</template>

<script>
import {asteroidNames} from "../utils";

export default {
  name: 'App',
  data: () => ({
    asteroidNames: [1,2,3],
    selected: "",
  }),
  mounted() {
  asteroidNames().then((data) => {
    console.log(data)
    this.asteroidNames=data;
  });
  },
  methods: {

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
