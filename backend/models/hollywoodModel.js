const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  posterUrl: { type: String, required: true },
  genres: [
    {
      id: Number,
      name: String
    }
  ],
  runtime: { type: Number, required: true },
  watchLink: { type: String, required: true, default: "#" }
});

// Create Model
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
