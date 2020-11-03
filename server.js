const express = require('express');
const app = express();
const knex = require("knex");
const config = require("./knexfile");
const db = knex(config);
require("dotenv").config();


const PORT = process.env.PORT || 9000;
// Serve static assets
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

  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  