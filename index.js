const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("Hello, CI/CD Students!");
});

module.exports = app;
