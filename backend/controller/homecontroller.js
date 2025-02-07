require('dotenv').config();
const axios = require('axios');
const Content = require('../models/movieModel');
const ContentTypes = require('../models/contentTypesModel');
const Genres = require('../models/genresModel');
const UpcomingMovie = require('../models/upcomingMoviesModel');

const OMDB_API_KEY = process.env.OMDB_API_KEY || '74a6f5ec'; // Use .env for security

// --- Fetch all content ---
const getAllContent = async (_, res) => {
  try {
    const content = await Content.find({});
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching content', error: err.message });
  }
};

// --- Get Movies by Genre ---
const getMoviesByGenre = async (req, res) => {
  try {
    const { genreId } = req.params;
    const content = await Content.find({ genres: genreId }).populate('contentTypeId').populate('genres');
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching movies by genre', error: err.message });
  }
};

// --- Get Movie Details by ID ---
const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await Content.findById(id).populate('contentTypeId').populate('genres');

    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.json(content);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching movie details', error: err.message });
  }
};

// --- Get All Genres ---
const getAllGenres = async (_, res) => {
  try {
    const genres = await Genres.find();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching genres', error: err.message });
  }
};

// --- Get Upcoming Movies ---
const getUpcomingMovies = async (_, res) => {
  try {
    const movies = await UpcomingMovie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching upcoming movies', error: err.message });
  }
};

// --- Get All Content Types ---
const getAllContentTypes = async (_, res) => {
  try {
    const contentTypes = await ContentTypes.find();
    res.json(contentTypes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching content types', error: err.message });
  }
};

// --- Add Movie ---
const addMovie = async (req, res) => {
  try {
    const { title, releaseDate, overview, rating, voteCount, genres, runtime, homepage, originalLanguage, status } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const omdbResponse = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${title}`);

    if (!omdbResponse.data || omdbResponse.data.Response === "False") {
      return res.status(404).json({ message: 'Movie not found in API' });
    }

    const movieData = omdbResponse.data;
    const posterUrl = movieData.Poster && movieData.Poster !== "N/A" ? movieData.Poster : "/img/default-poster.jpg";
    const processedVoteCount = movieData.imdbVotes ? parseInt(movieData.imdbVotes.replace(/,/g, ""), 10) : voteCount;
    const processedRuntime = movieData.Runtime ? parseInt(movieData.Runtime.split(" ")[0], 10) : runtime;

    const newMovie = new Content({
      title,
      releaseDate,
      overview: movieData.Plot || overview,
      rating: movieData.imdbRating || rating,
      voteCount: processedVoteCount,
      posterUrl,
      genres,
      runtime: processedRuntime,
      homepage,
      originalLanguage: movieData.Language || originalLanguage,
      status,
      watchOn: "Not Available",
      watchLink: "#"
    });

    await newMovie.save();
    res.status(201).json({ message: 'Movie added successfully', movie: newMovie });
  } catch (err) {
    res.status(500).json({ message: 'Error adding movie', error: err.message });
  }
};

// --- Update Movie Details ---
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedMovie = await Content.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.json({ message: 'Movie updated successfully', movie: updatedMovie });
  } catch (err) {
    res.status(500).json({ message: 'Error updating movie', error: err.message });
  }
};

// --- Export Controllers ---
module.exports = {
  getAllContent,
  getMoviesByGenre,
  getMovieDetails,
  getAllGenres,
  getUpcomingMovies,
  getAllContentTypes,
  addMovie,
  updateMovie
};
