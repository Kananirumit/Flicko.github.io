const mongoose = require("mongoose");

const indianSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  posterUrl: { type: String, default: "assets/img/default-poster.jpg" },
  director: { type: String, required: true },
  cast: { type: String, required: true },
  overview: { type: String, required: true },
});

// Create Model
const Indian = mongoose.model("Indian", indianSchema);
module.exports = Indian;
