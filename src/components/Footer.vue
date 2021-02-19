<template>
  <footer class="container">
    <div>👾 <a href="https://github.com/OnigiriJack/asteroids">GITHUB</a></div>
    <a href="https://api.nasa.gov/"><img :src="apiphoto" /></a>
    <h5>Made by Jack Fowler</h5>
    <p>
      This application was inspired by the "Election Day asteroid". I found it
      interesting that the asteroid was the size of a refrigerator, so I wanted
      to make an application that compares asteroids to everyday objects and
      structures. I hope you find it enjoyable. If you are intersted in exanding
      this app to the universe email me at
      <a href="jackfowlergolf@gmail.com">jackfowlergolf@gmail.com</a>
    </p>
  </footer>
</template>

<script>
import nasapi from "../assets/nasapi-min.png";
export default {
  name: "Footer",
  data: () => ({
    apiphoto: nasapi,
  }),
};
</script>
<style scoped>
.container {
  display: grid;
  justify-items: center;

  bottom: 0;
  width: 100%;
  background-color: white;
}
img {
  height: 25px;
  width: 100%;
  margin-top: 4px;
}
h5 {
  margin-top: 4px;
  margin-bottom: 4px;
  color: purple;
}
p {
  margin: 7px;
  font-size: 11px;
  color: black;
}
</style>
