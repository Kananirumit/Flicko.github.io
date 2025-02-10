require("dotenv").config();
const axios = require("axios");
const Content = require("../models/hollywoodModel");
const Indian = require("../models/indianModel");
const ContentTypes = require("../models/contentTypesModel");
const Genres = require("../models/genresModel");
const UpcomingMovie = require("../models/upcomingMoviesModel");
const fetchMoviePoster = require("../fetchMoviePoster");

const OMDB_API_KEY = process.env.OMDB_API_KEY || "74a6f5ec"; // Use .env for security

const getAllMovies = async (req, res) => {
  try {
    const movies = await Content.find({}, "title watchLink");

    console.log("✅ Movie Data Fetched:", movies);

    res.render("hollywood", {
      movies,
      currentPage: req.query.page ? parseInt(req.query.page) : 1,
      totalPages: Math.ceil(movies.length / 10)
    });
  } catch (error) {
    console.error("❌ Error fetching movies:", error);
    res.status(500).send("Internal Server Error");
  }
};



// --- Get Movies by Genre ---
const getMoviesByGenre = async (req, res) => {
  try {
    const { genreId } = req.params;
    const content = await Content.find({ genres: genreId }).populate("genres", "name");
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: "Error fetching movies by genre", error: err.message });
  }
};

// --- Get Movie Details by ID ---
const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await Content.findById(id).populate("genres", "name");

    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }

    res.json(content);
  } catch (err) {
    res.status(500).json({ message: "Error fetching movie details", error: err.message });
  }
};

// --- Get All Genres ---
const getAllGenres = async (_, res) => {
  try {
    const genres = await Genres.find();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ message: "Error fetching genres", error: err.message });
  }
};

// --- Get Upcoming Movies ---
const getUpcomingMovies = async (_, res) => {
  try {
    const movies = await UpcomingMovie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching upcoming movies", error: err.message });
  }
};

// --- Get All Content Types ---
const getAllContentTypes = async (_, res) => {
  try {
    const contentTypes = await ContentTypes.find();
    res.json(contentTypes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching content types", error: err.message });
  }
};
const addMovie = async (req, res) => {
  try {
    const { title, releaseDate, rating, genres, runtime } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const omdbResponse = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${title}`);

    if (!omdbResponse.data || omdbResponse.data.Response === "False") {
      return res.status(404).json({ message: "Movie not found in API" });
    }

    const movieData = omdbResponse.data;
    const posterUrl = movieData.Poster !== "N/A" ? movieData.Poster : "/img/default-poster.jpg";
    const processedRuntime = movieData.Runtime ? parseInt(movieData.Runtime.split(" ")[0], 10) : runtime;

    // ✅ Fix: Ensure watchLink is set properly
    const watchLink = movieData.imdbID
      ? `https://www.imdb.com/title/${movieData.imdbID}/`
      : `https://www.google.com/search?q=${encodeURIComponent(title)}`;

    const newMovie = new Content({
      title,
      releaseDate,
      rating: movieData.imdbRating || rating,
      posterUrl,
      genres,
      runtime: processedRuntime,
      watchLink 
    });

    await newMovie.save();
    res.status(201).json({ message: "Movie added successfully", movie: newMovie });
  } catch (err) {
    res.status(500).json({ message: "Error adding movie", error: err.message });
  }
};



// --- Update Movie Details ---
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedMovie = await Content.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie updated successfully", movie: updatedMovie });
  } catch (err) {
    res.status(500).json({ message: "Error updating movie", error: err.message });
  }
};

// --- Implement Pagination for Dashboard ---
const getPaginatedMovies = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const movies = await Content.find().skip(skip).limit(limit);
    const totalMovies = await Content.countDocuments();
    const totalPages = Math.ceil(totalMovies / limit);

    const updatedMovies = await Promise.all(
      movies.map(async (movie) => {
        try {
          const posterUrl = await fetchMoviePoster(movie.title);
          return {
            ...movie.toObject(),
            posterUrl: posterUrl || "assets/img/default-poster.jpg",
            genres: movie.genres.length ? movie.genres.map((g) => g.name).join(", ") : "No Genre"
          };
        } catch (error) {
          console.error(`❌ Failed to fetch poster for ${movie.title}:`, error);
          return {
            ...movie.toObject(),
            posterUrl: "assets/img/default-poster.jpg",
            genres: movie.genres.length ? movie.genres.map((g) => g.name).join(", ") : "No Genre"
          };
        }
      })
    );

    res.render("hollywood", { movies: updatedMovies, currentPage: page, totalPages });
  } catch (err) {
    console.error("❌ Error fetching movies:", err);
    res.render("index", { movies: [], currentPage: 1, totalPages: 1 });
  }
};
const getIndianMovies = async (req, res) => {
  try {
    const movies = await Indian.find({}, "title watchLink");
    
    console.log("✅ Indian Movie Data Fetched:", movies); // Debugging

    if (!movies.length) {
      console.log("⚠️ No movies found in the database.");
    }

    res.render("indian", {
      indianMovies: movies,
      currentPage: req.query.page ? parseInt(req.query.page) : 1,
      totalPages: Math.ceil(movies.length / 10),
    });
  } catch (error) {
    console.error("❌ Error fetching Indian movies:", error);
    res.status(500).send("Internal Server Error");
  }
};

// --- Export Controllers ---
module.exports = {
  getAllMovies,
  getMoviesByGenre,
  getMovieDetails,
  getAllGenres,
  getUpcomingMovies,
  getAllContentTypes,
  addMovie,
  updateMovie,
  getPaginatedMovies,
  getIndianMovies 
};