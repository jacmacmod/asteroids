<template>
  <div class="compare-wrapper">
    <div class="compare-item">
      <img :src="asteroidPic" />
    </div>
    <div class="compare-item">
      <img class="scaledObject" :src="EarthPhoto" :style="cssProps" />
    </div>
    <ul class="compare-item">
      <li>{{ selectedAsteroid }}</li>
      <li>{{ AsteroidDiameter }} m</li>
    </ul>
    <ul class="compare-item">
      <li>{{ EarthObject.name }}</li>
      <li>{{ EarthObject.diameter_in_meters }} m</li>
    </ul>
  </div>
</template>

<script>
let asteroidPic = require("../assets/asteroid.png");

export default {
  name: "Comparison",
  props: [
    "scale",
    "EarthObject",
    "scaledAsteroid",
    "AsteroidDiameter",
    "selectedAsteroid",
    "EarthPhoto",
  ],
  data: () => ({
    asteroidPic: asteroidPic,
  }),
  computed: {
    cssProps() {
      return {
        "--objectScale": this.scale,
      };
    },
  },
};
</script>
<style>
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
  justify-content: center;
  flex-direction: column;
}
.scaledObject {
  transform: scale(var(--objectScale)); /* Equal to scaleX(0.7) scaleY(0.7) */
}
</style>
