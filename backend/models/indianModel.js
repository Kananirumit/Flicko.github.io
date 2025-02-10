const mongoose = require("mongoose");

const indianSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true } ,
  posterUrl: { type: String, required: true },
  director: { type: String, required: true },
  cast: { type: String, required: true },
  overview: { type: String, required: true },
  watchLink: { type: String, required: true, default: "#" },
});

// Create Model
const Indian = mongoose.model("Indian", indianSchema);
module.exports = Indian;
