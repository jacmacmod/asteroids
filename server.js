const express = require('express');
const app = express();
require("dotenv").config();

// Serve static assets
app.use(express.static(__dirname, + "/public"));

app.get("/api", (req, res) => {
        res.send("jack")
});

app.get("/api/asteroids", async (req, res) => {
    try {
      const asteroids = await db.select().table("asteroids");
      // console.log(locations);
      res.json(asteroids);
    } catch (err) {
      console.error("Error loading locations!", err);
      res.sendStatus(500);
    }
  });
// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
  });
  
module.exports = app;