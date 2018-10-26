var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var util = require("util");
var data = require("./data/timesheet.json");
var app = express();
var isNew = true;

//Two way support to accept the POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Console log the request details
app.use(function(req, res, next) {
  console.log(
    `${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`
  );
  next();
});

//Use express serve the static file
app.use(express.static("./public"));

// middleware for show data
app.get("/time-api", function(req, res) {
  res.json(data);
  console.log(data);
});

app.post("/time-api", function(req, res) {
  data.forEach(function(elem) {
    if (elem.name === req.body.name) {
      elem.intervals++;
      isNew = false;
      res.json(data);
      fs.writeFile("./data/timesheet.json", JSON.stringify(data), function(
        err
      ) {
        console.log(err);
      });
    }
  });
  if (isNew) {
    data.push(req.body);
    res.json(data);
    fs.writeFile("./data/timesheet.json", JSON.stringify(data), function(err) {
      console.log(err);
    });
  }
  isNew = true;
});
app.listen(3000);
console.log("Express app running on my server");
module.exports = app;
