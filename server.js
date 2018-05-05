const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const reservations = [
  {
    name: "Kyle",
    phonenumber: 9999999999,
    email: "kyle@kyle.kyle",
    uniqueID: "ME"
  }
];

const waitList = [];

// Routes
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
  var newReservation = req.body;
  if (reservations.length <= 7) {
    reservations.push(newReservation);
    alert("Your reservation has been made!");
  } else {
    waitList.push(newReservation);
    alert("Your reservation has been added to the wait list :(");
  }
  res.redirect(path.join(__dirname, "tables.html"));
  console.log(reservations);
  console.log(waitList);
  res.json(newReservation);
});

// Server Listener
app.listen(PORT, () => {
  console.log("App listening on", PORT);
});
