const axios = require("axios");
const debug = require("debug")("app:lyricsController");

function lyricsController(lyricsService) {
  async function getLyrics(req, res) {
    try {
      const artist = req.params.artist;
      const song = req.params.song;
      
      res.send("Lyrics " + artist + " " + song);
    } catch (err) {
      debug("ERROR in lyricsController");
      //debug(err.stack);
    }
  }

  return {
    getLyrics,
  };
}

module.exports = lyricsController;
