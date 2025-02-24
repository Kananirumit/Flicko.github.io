const mongoose = require("mongoose");

const englishSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  posterUrl: { type: String},
  genre: { type: String, required: true },
  cast: { type: String, required: true },
  runtime: { type: Number, required: true },
});

const English = mongoose.model("English", englishSchema);
module.exports = English;
