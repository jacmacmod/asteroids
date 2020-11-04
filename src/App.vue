<template>
  <div id="app">
    <div class =wrapper>
    <!-- selector area -->
    <div class="header">
      <button v-on:click="compare">COMPARE</button>
      <select v-model="selectedAsteroid" >
      <option disabled value="">Please select Asteroid☄️</option>
      <option v-for="asteroid of asteroids" :key="asteroid" >{{asteroid.name}}
      </option>
      </select>
    </div>
       <!-- results -->
       
    <div class="sidebar" ><img class="asteroid" :src="photos[1].photo"/>{{selectedAsteroid}}  {{AsteroidDiameter}} meters </div>
    <div class="sidebar2" :style="cssProps">  <img class="asteroid scaledObject" :src="EarthPhoto"/> {{EarthObject.name}} {{EarthObject.diameter_in_meters}} meters</div>
    <div class="content">
      <h2 >{{EarthObject.name}} is {{scale}} times the size of the Asteroid {{selectedAsteroid}}</h2>
    </div>
    <div class="footer">
      👾 <a href="https://github.com/OnigiriJack/asteroids">GITHUB</a>
        
    </div>
    </div>
  </div>
</template>

<script>
import {asteroidNamesAndSize, closestObjectToAsteroid} from "../utils";
let airplane = require("./assets/airplane.png");
let asteroid = require("./assets/asteroid.png");
let cactus = require("./assets/cactus.png");
let fridge = require("./assets/fridge.png");
let soccer = require("./assets/soccer.png");
let truck = require("./assets/truck.png");
let building = require("./assets/building.png");


export default {
  name: 'App',
  data: () => ({
    asteroids: [1,2,3],
    scale: 1.1,
    photos: [
      {photo: airplane, name: "Cactus"}, 
      {photo: asteroid, name: "Asteroid"}, 
      {photo: building, name: "Mori Tower"}, 
      {photo: cactus, name: "Cactus"}, 
      {photo:fridge, name: "Fridge"}, 
      {photo: soccer, name: "Soccer Field"}, 
      {photo: truck, name: "Truck"},
      ],
    selectedAsteroid: "",
    asteroid: "",
    EarthObject: "",
    EarthPhoto: "",
    AsteroidDiameter: ";"
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
        for (let photo of this.photos){
          if(photo.name === this.EarthObject.name){
            this.EarthPhoto = photo.photo;
          }
        }
        for (let asteroid of this.asteroids) {
          if(asteroid.name === this.selectedAsteroid){
            this.AsteroidDiameter = asteroid.diameter_in_meters_min ;
            this.scale = ( this.EarthObject.diameter_in_meters/asteroid.diameter_in_meters_min ).toFixed(2);
          }
        }
      });
    },
  },
  computed: {
    cssProps() {
      return {
        '--objectScale': this.scale,
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
}
.sidebar {
        grid-area: sidebar;
        text-align: center;
    }

    .sidebar2 {
        grid-area: sidebar2;
        text-align: center;
    }

    .content {
        grid-area: content;
        margin: 5px;
    }

    .header {
        grid-area: header;
    }

    .footer {
        grid-area: footer;
        text-align: center;
        background-color:cornsilk;
    }

    .wrapper {
        background-color: #fff;
        color: #444;
    }

  .wrapper {
    background-color: #3b404e;
  color: white;
    display: grid;
    grid-gap: 1em;
    grid-template-areas:
     "header"
     "sidebar"
     "content"
     "sidebar2"
     "footer"
  }

.asteroid {
  margin: 20px;
  width: 140px;
  height: auto;
  
 
}

.scaledObject {
  transform: scale(var(--objectScale)); /* Equal to scaleX(0.7) scaleY(0.7) */
  
}

 @media only screen and (min-width: 500px)  {
    .wrapper {
        grid-template-columns: 20% auto;
        grid-template-areas:
    "header   header"
        "sidebar  content"
        "sidebar2 sidebar2"
        "footer   footer";
    }
    }
  @media only screen and (min-width: 600px)   {
        .wrapper {
      grid-gap: 20px;
            grid-template-columns: 120px auto 120px;
            grid-template-areas:
      "header  header  header"
            "sidebar content sidebar2"
            "footer  footer  footer";
            max-width: 600px;
        }
    }
</style>
