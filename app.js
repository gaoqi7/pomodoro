var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var isNew = true;
var time = [
  {
    name: "javascript",
    intervals: 0
  }
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  console.log(
    `${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`
  );
  next();
});

app.use(express.static("./public"));
app.get("/time-api", function(req, res) {
  res.json(time);
});
app.post("/time-api", function(req, res) {
  time.forEach(function(elem) {
    if (elem.name === req.body.name) {
      elem.intervals++;
      isNew = false;
      res.json(time);
    }
  });
  if (isNew) {
    time.push(req.body);
    res.json(time);
  }
  isNew = true;
});
app.listen(3000);

console.log("Express app running on my server");
module.exports = app;
