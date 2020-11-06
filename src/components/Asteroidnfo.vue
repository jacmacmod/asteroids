<template>
  <div class="results-wrapper">
    <div class="results-item">
      <h2>
        {{ EarthObject.name }} is {{ scale }} times the size of the Asteroid
        {{ selectedAsteroid }}
      </h2>
      <button v-on:click="displayAsteroidInfo">
        learn more about {{ selectedAsteroid }}
      </button>
    </div>

    <div class="results-item">
      <ul v-for="(value, propertyName, index) in AsteroidData" :key="index">
        <li v-if="index === 2">
          {{ propertyName }}:<a v-bind:href="value">
            {{ value }}
          </a>
        </li>
        <li v-else>{{ propertyName }}: {{ value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getAsteroidInformation } from '../../utils';
export default {
  name: 'AsteroidInfo',
  props: ['EarthObject', 'selectedAsteroid', 'scale'],
  data: () => ({
    AsteroidData: [],
  }),
  methods: {
    displayAsteroidInfo() {
      console.log(this.selectedAsteroid);
      getAsteroidInformation(this.selectedAsteroid).then((data) => {
        this.AsteroidData = data[0];
        console.log(data);
      });
    },
  },
};
</script>

<style scoped>
.results-wrapper {
  display: grid;
  justify-items: center;
}
.results-item {
  display: flex;
  flex-direction: column;
}
.ratio {
  flex-direction: column;
}
a:link {
  color: gainsboro;
}
ul {
  list-style: '☄️';
}
h2 {
  padding-left: 10px;
}
</style>
