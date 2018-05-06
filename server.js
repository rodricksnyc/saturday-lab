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

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
  // res.redirect("/reservation");
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));

});

app.get("/reservations", (req, res) => {
res.json(reservations);

})


app.post("/reservation", function(req, res) {
  var newReservation = req.body;
  // res.redirect("/tables");
  console.log("Route ws hit");
  console.log(newReservation);
  if (reservations.length <= 6) {
    reservations.push(newReservation);
  } else {
    waitList.push(newReservation);

  }
  // res.redirect("/tables");
  console.log(reservations);
  console.log(waitList);
  res.json(newReservation);
});

// Server Listener
app.listen(PORT, () => {
  console.log("App listening on", PORT);
});
