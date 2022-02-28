const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const axios = require("axios").default;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(bodyParser.json());

var distDir = __dirname + "/dist/angular-app";
app.use(express.static(distDir));

const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log("App now running on port", port);
});

app.get("/api/stock", async (req, res) => {
  const { symbols } = req.query;

  let config = {
    headers: {
      accept: "application/json",
      "X-API-KEY": "CgX5CK2F3n4LnX457U6r7aTkFeHWviLw4W1tLXqX",
    },
  };

  let data;

  try {
    const response = await axios.get(
      `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${encodeURIComponent(
        symbols
      )}`,
      config
    );

    data = response.data;
  } catch (error) {
    console.log(error.message);
    data = error;
  }

  res.status(200).send(data);
});
