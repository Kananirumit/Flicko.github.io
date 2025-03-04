const mongoose = require("mongoose");

const webSeriesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  yearReleased: { type: Number, required: true },  // Match MongoDB field
  contentRating: { type: String, required: true }, // Changed from Number to String
  rating: { type: Number, required: true },
  posterUrl: { type: String},
  genre: { type: String, required: true },
  noofSeasons: { type: String, required: true },  // Standardized field name
  streamingPlatform: { type: String, required: true },  // Standardized field name
});

// Create Model
const WebSeries = mongoose.model("WebSeries", webSeriesSchema);
module.exports = WebSeries;
  