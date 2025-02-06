const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
  rating: { type: Number, required: true },
  review: { type: String },
});

module.exports = mongoose.model('Ratings', ratingSchema);
