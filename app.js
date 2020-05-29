var express = require("express");

var app = express();

app.get("/", function (req, resp) {
  resp.send("Hello Node.js Playground API");
});

app.listen(8080, function () {
  console.log("Listening in port 8080");
});
