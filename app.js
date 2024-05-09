const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.use("/about", (req, res) => {
  res.sendFile(__dirname + "/public/html/about.html");
});

app.use((req, res, next) => {
  res.status(404).json({
    Error: "URL Not Found",
  });
});

module.exports = app;
