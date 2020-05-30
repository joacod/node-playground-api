const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));

const appRouter = require("./src/routes/appRouter");
app.use("/api/v1", appRouter);

app.get('/', (req, res) => {
  res.send("Hello Node.js Playground API");
});

app.listen(8080, () => {
  debug(`Listening on port ${chalk.green("8080")}`);
});
