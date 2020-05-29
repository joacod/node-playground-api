var express = require("express");
var chalk = require("chalk");
var debug = require("debug")("app");
var morgan = require("morgan");

var app = express();

app.use(morgan("tiny"));

app.get("/", function (req, resp) {
  resp.send("Hello Node.js Playground API");
});

app.listen(8080, function () {
  debug(`Listening on port ${chalk.green("8080")}`);
});
