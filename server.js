const express = require('express');
const app = express();
const knex = require("knex");
const config = require("./knexfile");
const db = knex(config);
require("dotenv").config();

app.use(express.static("dist"));

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

  app.get("/api/asteroids/namesAndSize", async (req, res) => {
    try {
      const asteroidNames = await db.select("name", "diameter_in_meters_min").table("asteroids");
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
 
app.get("/api/closest/:name", async (req, res) => {
    const name = req.params.name;
    try {
      const diameterToCompare = await db
      .select("diameter_in_meters_min")
      .table("asteroids")
      .where({name:name})
          
    let diameter = diameterToCompare[0]["diameter_in_meters_min"];
    const compareable = await db.raw(`select name, diameter_in_meters from items order by abs(diameter_in_meters - ${diameter}) limit 1;`)
    res.json(compareable.rows[0]);
    
    } catch (err) {
      console.error("Error finding names!", err);
      res.sendStatus(500);
    }
  });


  module.exports = app;