const express = require("express");
const lyricsController = require("../controllers/lyricsController");

const appRouter = express.Router();

const { getLyrics } = lyricsController();
appRouter.route("/lyrics/:artist/:song").get(getLyrics);

module.exports = appRouter;
