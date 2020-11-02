const express = require('express');
const axios = require('axios');
const app = express();

let today =  new Date();
let yesterday =  new Date(today);
yesterday.setDate(yesterday.getDate() - 1)

const ISOTODAY = today.toISOString().split('T')[0];
const ISOYESTERDAY = yesterday.toISOString().split('T')[0];

const NASA_URL =  `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=${ISOTODAY}&api_key=${process.env.NASA_API_KEY}`; 
app.use(express.static(__dirname + "/dist"));

app.use("/api", (req, res) => {
  
    res.send("IOI ☄️"+ ISOTODAY + "  "+ISOYESTERDAY);
})


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("App listneing on port " + 4000);
})