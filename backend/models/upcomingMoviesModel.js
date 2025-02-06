const mongoose = require('mongoose');

const upcomingMovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  description: { type: String },
  posterUrl: { type: String },
  status: { type: String, enum: ['Upcoming', 'Delayed', 'Postponed'], required: true },
});

module.exports = mongoose.model('UpcomingMovies', upcomingMovieSchema);
