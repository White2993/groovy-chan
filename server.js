const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.static("public"));
app.use(express.static("assets"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.get("/homepage.html", function(req, res) {
  res.sendFile(__dirname + "/homepage.html")
});

app.get("/userprofile.html", function(req, res) {
  res.sendFile(__dirname + "/userprofile.html")
});

app.listen(process.env.PORT || port, function(req, res) {
  console.log("port listening on " + port);
});