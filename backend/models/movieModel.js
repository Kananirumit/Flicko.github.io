const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseDate: { type: String, required: true },
  rating: { type: Number, required: true },
  voteCount: { type: Number, required: true },
  posterUrl: { type: String, required: true },
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genres" }],
  runtime: { type: Number, required: true },
  homepage: { type: String, required: true },
  originalLanguage: { type: String, required: true },
  status: { type: String, required: true },
  watchOn: { type: String, required: true, default: "Not Available" }, 
  watchLink: { type: String, required: true, default: "#" },
});

const Content = mongoose.model("Movie", movieSchema);

module.exports = Content;
