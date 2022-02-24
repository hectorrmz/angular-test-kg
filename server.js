const express = require("express");
const axios = require("axios").default;
const app = express();

app.get("/test", async (req, res) => {
  console.log(req.url);

  const response = await axios.get("https://google.com");

  res.send(JSON.stringify(response.data));
  res.end();
});

app.listen(3000, () => console.log("Listening"));
