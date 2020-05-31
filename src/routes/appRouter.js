const express = require("express");
const lyricsController = require("../controllers/lyricsController");
const lyricsService = require("../services/lyricsService");

const appRouter = express.Router();

const { getLyrics } = lyricsController(lyricsService);
appRouter.route("/lyrics/:artist/:song").get(getLyrics);

module.exports = appRouter;
