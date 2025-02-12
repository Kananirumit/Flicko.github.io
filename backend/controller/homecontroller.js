require("dotenv").config();
const axios = require("axios");
const Content = require("../models/hollywoodModel");
const Indian = require("../models/indianModel");
const AnimeModel = require("../models/animeModel");
const Webseries = require("../models/webseriesModel");
const ContentTypes = require("../models/contentTypesModel");
const Genres = require("../models/genresModel");
const UpcomingMovie = require("../models/upcomingMoviesModel");
const fetchMoviePoster = require("../fetchMoviePoster");

const OMDB_API_KEY_MOVIES = process.env.OMDB_API_KEY_MOVIES || "74a6f5ec"; // API key for English and Indian Movies
const OMDB_API_KEY_SERIES = process.env.OMDB_API_KEY_SERIES || "8909b00d"; // API key for Web Series and Anime

const getAllMovies = async (req, res) => {
  try {
    const movies = await Content.find({}, "title watchLink");
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
const getPoster = async (title, type) => {
  const existingMovie = await Content.findOne({ title });

  if (existingMovie && existingMovie.posterUrl) {
    return existingMovie.posterUrl;
  }

  const apiKey = type === "series" || type === "anime" ? OMDB_API_KEY_SERIES : OMDB_API_KEY_MOVIES;
  const url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    
    if (response.data.Response === "False") {
      console.warn(`⚠️ OMDB API Error: ${response.data.Error}`);
      return "/assets/img/default-poster.jpg";
    }

    const posterUrl = response.data.Poster !== "N/A" ? response.data.Poster : "/assets/img/default-poster.jpg";

    // Store the poster in MongoDB to prevent multiple API calls
    await Content.updateOne({ title }, { $set: { posterUrl } }, { upsert: true });

    return posterUrl;
  } catch (error) {
    console.error(`❌ Error fetching poster for ${title}:`, error);
    return "/assets/img/default-poster.jpg";
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
    const { title, releaseDate, rating, genres, runtime, type } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const apiKey = type === "series" || type === "anime" ? OMDB_API_KEY_SERIES : OMDB_API_KEY_MOVIES;
    const omdbResponse = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);

    if (!omdbResponse.data || omdbResponse.data.Response === "False") {
      return res.status(404).json({ message: "Movie not found in API" });
    }

    const movieData = omdbResponse.data;
    const posterUrl = movieData.Poster !== "N/A" ? movieData.Poster : "/img/default-poster.jpg";
    const processedRuntime = movieData.Runtime ? parseInt(movieData.Runtime.split(" ")[0], 10) : runtime;

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
    let page = parseInt(req.query.page) || 1;
    let limit = 10;
    let skip = (page - 1) * limit;

    const totalMovies = await Indian.countDocuments();
    const totalPages = Math.ceil(totalMovies / limit);
    const indianMovies = await Indian.find().skip(skip).limit(limit);

    // Fetch missing posters
    const updatedIndianMovies = await Promise.all(
      indianMovies.map(async (movie) => {
        if (!movie.posterUrl || movie.posterUrl === "/assets/img/default-poster.jpg") {
          const posterUrl = await getPoster(movie.title, "movie");
          await Indian.updateOne({ _id: movie._id }, { $set: { posterUrl } });
          return { ...movie.toObject(), posterUrl };
        }
        return movie.toObject();
      })
    );

    res.render("indian", {
      indianMovies: updatedIndianMovies,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.error("Error fetching Indian movies:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getAllWebSeries = async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = 10;
    let skip = (page - 1) * limit;

    const totalSeries = await Webseries.countDocuments();
    const totalPages = Math.ceil(totalSeries / limit);
    const series = await Webseries.find().skip(skip).limit(limit);

    // Fetch missing posters
    const updatedSeries = await Promise.all(
      series.map(async (s) => {
        if (!s.posterUrl || s.posterUrl === "/assets/img/default-poster.jpg") {
          const posterUrl = await getPoster(s.title, "series");
          await Webseries.updateOne({ _id: s._id }, { $set: { posterUrl } });
          return { ...s.toObject(), posterUrl };
        }
        return s.toObject();
      })
    );

    res.render("webseries", { webSeries: updatedSeries, currentPage: page, totalPages });
  } catch (error) {
    console.error("❌ Error fetching Web Series:", error);
    res.status(500).send("Internal Server Error");
  }
};
const getAllAnime = async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const skip = (page - 1) * limit;

      // Fetch anime from database
      const animeList = await AnimeModel.find().skip(skip).limit(limit);
      const totalAnime = await AnimeModel.countDocuments();
      const totalPages = Math.ceil(totalAnime / limit);

      // Ensure animeList is passed correctly
      res.render("anime", {
          anime: animeList, 
          currentPage: page,
          totalPages: totalPages
      });
  } catch (error) {
      console.error("Error fetching anime:", error);
      res.status(500).send("Server Error");
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
  getPoster,
  getPaginatedMovies,
  getIndianMovies,
  getAllWebSeries,
  getAllAnime,
};