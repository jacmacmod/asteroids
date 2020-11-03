const express = require('express');
const app = express();
const knex = require("knex");
const config = require("./knexfile");
const db = knex(config);
require("dotenv").config();


const PORT = process.env.PORT || 9000;
// Serve static assets
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(express.static(__dirname, + "/public"));

app.get("/api/asteroids", async (req, res) => {
    try {
      const asteroids = await db.select().table("asteroids");
      console.log(asteroids);
      res.json(asteroids);
    } catch (err) {
      console.error("Error loading asteroids!", err);
      res.sendStatus(500);
    }
  });

  app.get("/api/asteroids/names", async (req, res) => {
    try {
      const asteroidNames = await db.select("name").table("asteroids");
      res.json(asteroidNames);
    } catch (err) {
      console.error("Error finding names!", err);
      res.sendStatus(500);
    }
  });

  app.get("/api/asteroids/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const asteroidNames = await db
      .select()
      .table("asteroids")
      .where({id:id});
      res.json(asteroidNames);
    } catch (err) {
      console.error("Error finding names!", err);
      res.sendStatus(500);
    }
  });
 // select diameter_in_meters, name from items order by abs(diameter_in_meters - 25) limit 1;
app.get("/api/closest/:id", async (req, res) => {
    const id = req.params.id;
    //console.log("here" + id)
    //res.send("jack " + id)
    try {
      const diameterToCompare = await db
      .select("diameter_in_meters_min")
      .table("asteroids")
      .where({id:id})
          
    let diameter = diameterToCompare[0]["diameter_in_meters_min"];
    const compareable = await db.raw(`select name, diameter_in_meters from items order by abs(diameter_in_meters - ${diameter}) limit 1;`)
    res.json(compareable.rows[0]);
    
    } catch (err) {
      console.error("Error finding names!", err);
      res.sendStatus(500);
    }
  });
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  