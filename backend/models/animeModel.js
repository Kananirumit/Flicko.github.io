const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  contenttype: { type: String, required: true },
  rating: { type: Number, required: true },
  episodes: { type: Number, required: true },
  genres: [{ type: String, required: true }],
  PosterUrl: { type: String, required: true },
  trailer: { type: String, required: true },
});

const AnimeModel = mongoose.model("Anime", animeSchema);

module.exports = AnimeModel; // ✅ Ensure this is exported correctly
