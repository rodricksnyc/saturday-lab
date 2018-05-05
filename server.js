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

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.post("/reservation", function(req, res) {
  var newReservation = req.body;
  if (reservations.length <= 6) {
    reservations.push(newReservation);
    alert("Your reservation has been made!");
  } else {
    waitList.push(newReservation);
    alert("Your reservation has been added to the wait list :(");
  }
  res.redirect(path.join(__dirname, "table.html"));
  console.log(reservations);
  console.log(waitList);
  res.json(newReservation);
});

// Server Listener
app.listen(PORT, () => {
  console.log("App listening on", PORT);
});
