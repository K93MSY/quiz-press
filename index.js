const express = require("express");
const app = express();

app.use(express.static(__dirname + "/press"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/press/index.html")
});

app.listen(8000);