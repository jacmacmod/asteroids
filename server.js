const express = require('express');
const axios = require('axios');
const app = express();
require("dotenv").config();

function createNASAURL() {
    let today =  new Date();
    let yesterday =  new Date(today);
    yesterday.setDate(yesterday.getDate() - 1)
    const ISOTODAY = today.toISOString().split('T')[0];
    const ISOYESTERDAY = yesterday.toISOString().split('T')[0]; 
    return `https://api.nasa.gov/neo/rest/v1/feed?start_date=${ISOYESTERDAY}&end_date=${ISOTODAY}&api_key=${process.env.NASA_API_KEY}`;
}
  
let NASA_URL =  createNASAURL();

async function getAsteroids(URL) {
    const { data: asteroids } = await axios.get(URL);
 return asteroids;
}



app.use(express.static(__dirname + "/dist"));

app.use("/api", (req, res) => {
let asteroids = getAsteroids(NASA_URL)
    res.json(asteroids);
})


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("App listneing on port " + 4000);
})