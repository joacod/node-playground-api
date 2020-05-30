const express = require("express");
const appRouter = express.Router();

appRouter.route("/").get((req, res) => {
  res.send("Hello Node.js Playground API");
});
appRouter.route("/api/v1/lyrics/:artist/:song").get((req, res) => {
  const artist = req.params.artist;
  const song = req.params.song;

  res.send("Lyrics " + artist + " " + song);
});

module.exports = appRouter;
