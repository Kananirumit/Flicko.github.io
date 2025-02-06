const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  rating: { type: Number, required: true },
  description: { type: String },
  posterUrl: { type: String },
  contentTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'ContentTypes' },
  episodes: { type: Number },
  isUpcoming: { type: Boolean, default: false },
  watchOn: { type: String },
  watchLink: { type: String },
});

module.exports = mongoose.model('Content', contentSchema);
