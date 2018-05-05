const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const reserve = {};
const waitList = {};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables ", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve ", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/reserve ", function(req, res) {
  res.redirect(path.join(__dirname, "tables.html"));
});

app.listen(PORT, () => {
  console.log("App listening on", PORT);
});
