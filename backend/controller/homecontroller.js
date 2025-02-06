const Content = require('../models/contentModel');
const ContentTypes = require('../models/contentTypesModel');
const Genres = require('../models/genresModel');
const Rating = require('../models/ratingsModel');
const UpcomingMovie = require('../models/upcomingMoviesModel');

// --- Content and Genre Controller ---
const getAllContent = async (_, res) => {
  try {
    const content = await Content.find().populate('contentTypeId').populate('genres');
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMoviesByGenre = async (req, res) => {
  try {
    const { genreId } = req.params;
    const content = await Content.find({ genres: genreId }).populate('contentTypeId');
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await Content.findById(id).populate('contentTypeId').populate('genres');
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllGenres = async (_, res) => {
  try {
    const genres = await Genres.find();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUpcomingMovies = async (_, res) => {
  try {
    const movies = await UpcomingMovie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllContentTypes = async (_, res) => {
  try {
    const contentTypes = await ContentTypes.find();
    res.json(contentTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllContent,
  getMoviesByGenre,
  getMovieDetails,
  getAllGenres,
  getUpcomingMovies,
  getAllContentTypes
};
