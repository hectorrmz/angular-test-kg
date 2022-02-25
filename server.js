const express = require("express");
var bodyParser = require("body-parser");
const axios = require("axios").default;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

var distDir = __dirname + "/dist/angular-app";
app.use(express.static(distDir));

const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log("App now running on port", port);
});

app.get("/api/status", async (req, res) => {
  console.log(req.url);
  const response = await axios.get("https://swapi.dev/api/people/1");
  res.status(200).send(response.data);
  res.end();
});
