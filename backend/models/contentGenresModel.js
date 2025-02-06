const mongoose = require('mongoose');

const contentGenreSchema = new mongoose.Schema({
  contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
  genreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Genres' },
});

module.exports = mongoose.model('ContentGenres', contentGenreSchema);
