const HTTP_PORT = 5000;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Mon site avec nginx</h1>");
});

app.listen(HTTP_PORT, () => {
  console.log(`App listening on port ${HTTP_PORT}!`);
});
