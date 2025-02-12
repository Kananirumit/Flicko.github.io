const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  contenttype: { type: String, required: true },
  rating: { type: Number, required: true },
  episodes:{type : Number, required: true},
  genres: [{ type: String, required: true }],
  PosterUrl: { type: String, required: true },
  trailer:{type: String, required: true},
});

// Create Model
const Anime = mongoose.model("Anime", animeSchema);
module.exports = Anime;
