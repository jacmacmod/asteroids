const express = require('express');

const app = express();

app.use(express.static(__dirname + "/dist"));

app.use("/api", (req, res) => {
    res.send("OIOIOI ☄️");
})
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("App listneing on port " + 4000);
})