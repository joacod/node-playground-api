const axios = require("axios");
const debug = require("debug")("app:lyricsService");

function lyricsService() {
  async function getLyrics(artist, song) {
    let result = {
      Artist: titleCase(artist),
      SongTitle: titleCase(song),
      Lyrics: "Lyrics not found.",
    };

    try {
      let response = await axios.get(
        `https://api.lyrics.ovh/v1/${artist}/${song}`
      );

      if (response.data.lyrics !== "") {
        result.Lyrics = response.data.lyrics;
      }

      return result;
    } catch (error) {
      debug("ERROR in lyricsService");
      //debug(err.stack);
      return result;
    }
  }

  return { getLyrics };
}

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}

module.exports = lyricsService();
