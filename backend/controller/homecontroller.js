require("dotenv").config();
const axios = require("axios");
const English = require("../models/EnglishModel");
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
      totalPages: Math.ceil(movies.length / 10),
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
const getPoster = async (title, type) => {
  if (!title || typeof title !== "string" || title.trim() === "") {
    return "/assets/img/default-poster.jpg";
  }

  try {
    console.log(`🔍 Fetching poster for: ${title}`);
    const existingMovie = await English.findOne({ Title: title });

    if (existingMovie && existingMovie.Poster) {
      return existingMovie.Poster;
    }

    const apiKey =
      type === "series" || type === "anime"
        ? OMDB_API_KEY_SERIES
        : OMDB_API_KEY_MOVIES;
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(
      title
    )}&apikey=${apiKey}`;

    const response = await axios.get(url);

    if (response.data.Response === "False") {
      return "/assets/img/default-poster.jpg";
    }

    const posterUrl =
      response.data.Poster !== "N/A"
        ? response.data.Poster
        : "/assets/img/default-poster.jpg";

    // Store in DB to prevent multiple API calls
    await English.updateOne(
      { title: title },
      { $set: { Poster: posterUrl } },
      { upsert: true }
    );

    return posterUrl;
  } catch (error) {
    console.error(`❌ Error fetching poster for ${title}:`, error);
    return "/assets/img/default-poster.jpg";
  }
};

// --- Get Upcoming Movies ---
const getUpcomingMovies = async (_, res) => {
  try {
    const movies = await UpcomingMovie.find();
    res.json(movies);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching upcoming movies", error: err.message });
  }
};

// --- Get All Content Types ---
const getAllContentTypes = async (_, res) => {
  try {
    const contentTypes = await ContentTypes.find();
    res.json(contentTypes);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching content types", error: err.message });
  }
};
const addMovie = async (req, res) => {
  try {
    const { title, releaseDate, rating, genres, runtime, type } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const apiKey =
      type === "series" || type === "anime"
        ? OMDB_API_KEY_SERIES
        : OMDB_API_KEY_MOVIES;
    const omdbResponse = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`
    );

    if (!omdbResponse.data || omdbResponse.data.Response === "False") {
      return res.status(404).json({ message: "Movie not found in API" });
    }

    const movieData = omdbResponse.data;
    const posterUrl =
      movieData.Poster !== "N/A" ? movieData.Poster : "/img/default-poster.jpg";
    const processedRuntime = movieData.Runtime
      ? parseInt(movieData.Runtime.split(" ")[0], 10)
      : runtime;

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
      watchLink,
    });

    await newMovie.save();
    res
      .status(201)
      .json({ message: "Movie added successfully", movie: newMovie });
  } catch (err) {
    res.status(500).json({ message: "Error adding movie", error: err.message });
  }
};

// --- Update Movie Details ---
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedMovie = await Content.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie updated successfully", movie: updatedMovie });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating movie", error: err.message });
  }
};
const getEnglishMovies = async (req, res) => {
  try {
    let searchQuery = req.query.search ? req.query.search.trim() : "";
    let page = parseInt(req.query.page) || 1;
    let limit = 10;
    let skip = (page - 1) * limit;

    // Search filter for movie title
    const searchFilter = searchQuery
      ? { Title: { $regex: searchQuery, $options: "i" } } // Case-insensitive search
      : {};

    // Get total count of filtered movies
    const totalMovies = await English.countDocuments(searchFilter);
    const totalPages = Math.ceil(totalMovies / limit);

    // Fetch filtered movies with pagination
    const englishMovies = await English.find(searchFilter)
      .skip(skip)
      .limit(limit)
      .lean(); // Use lean() for better performance

    // Fetch missing posters
    const updatedEnglishMovies = await Promise.all(
      englishMovies.map(async (movie) => {
        // Use the correct field name (lowercase `title`)
        if (!movie.title) {
          return { ...movie, posterUrl: "/assets/img/default-poster.jpg" };
        }

        try {
          let posterUrl = movie.posterUrl || "/assets/img/default-poster.jpg";
          if (
            !movie.posterUrl ||
            movie.posterUrl === "/assets/img/default-poster.jpg"
          ) {
            posterUrl = await getPoster(movie.title, "movie");
            await English.updateOne(
              { _id: movie._id },
              { $set: { posterUrl } }
            );
          }
          return { ...movie, posterUrl };
        } catch (posterError) {
          return { ...movie, posterUrl: "/assets/img/default-poster.jpg" };
        }
      })
    );

    res.render("hollywood", {
      englishMovies: updatedEnglishMovies,
      currentPage: page,
      totalPages,
      searchQuery, // Maintain search query input value
    });
  } catch (error) {
    console.error("❌ Internal Server Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getIndianMovies = async (req, res) => {
  try {
    let searchQuery = req.query.search ? req.query.search.trim() : "";
    let page = parseInt(req.query.page) || 1;
    let limit = 10;
    let skip = (page - 1) * limit;

    // Search filter for movie title
    const searchFilter = searchQuery
      ? { title: { $regex: searchQuery, $options: "i" } } // Case-insensitive search
      : {};

    // Get total count of filtered movies
    const totalMovies = await Indian.countDocuments(searchFilter);
    const totalPages = Math.ceil(totalMovies / limit);

    // Fetch filtered movies with pagination
    const indianMovies = await Indian.find(searchFilter)
      .skip(skip)
      .limit(limit);

    // Fetch missing posters
    const updatedIndianMovies = await Promise.all(
      indianMovies.map(async (movie) => {
        if (
          !movie.posterUrl ||
          movie.posterUrl === "/assets/img/default-poster.jpg"
        ) {
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
      searchQuery, // Send searchQuery to maintain input value in the frontend
    });
  } catch (error) {
    console.error("Error fetching Indian movies:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getAllWebSeries = async (req, res) => {
  try {
    let searchQuery = req.query.search ? req.query.search.trim() : "";
    let page = parseInt(req.query.page) || 1;
    let limit = 10;
    let skip = (page - 1) * limit;

    // Search filter for web series title
    const searchFilter = searchQuery
      ? { title: { $regex: searchQuery, $options: "i" } } // Case-insensitive search
      : {};

    // Get total count of filtered web series
    const totalSeries = await Webseries.countDocuments(searchFilter);
    const totalPages = Math.ceil(totalSeries / limit);

    // Fetch filtered web series with pagination
    const series = await Webseries.find(searchFilter).skip(skip).limit(limit);

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

    res.render("webseries", {
      webSeries: updatedSeries,
      currentPage: page,
      totalPages,
      searchQuery, // Send searchQuery to maintain input value in frontend
    });
  } catch (error) {
    console.error("❌ Error fetching Web Series:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getAllAnime = async (req, res) => {
  try {
    const searchQuery = req.query.search || "";
    const page = parseInt(req.query.page) || 1;
    const limit = 10;

    const filter = searchQuery
      ? { title: { $regex: searchQuery, $options: "i" } }
      : {};

    const totalAnime = await AnimeModel.countDocuments(filter);
    const totalPages = searchQuery ? 1 : Math.ceil(totalAnime / limit);
    const skip = searchQuery ? 0 : (page - 1) * limit;

    const animeList = await AnimeModel.find(filter).skip(skip).limit(limit);

    res.render("anime", {
      anime: animeList,
      currentPage: searchQuery ? 1 : page,
      totalPages,
      searchQuery,
    });
  } catch (error) {
    console.error("Error fetching anime:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

// Create a new anime entry
const createAnime = async (req, res) => {
  try {
    const { title, genre, releaseYear, rating } = req.body;
    const newAnime = new AnimeModel({ title, genre, releaseYear, rating });
    await newAnime.save();
    res.redirect("/anime");
  } catch (error) {
    console.error("Error creating anime:", error);
    res.status(500).json({ error: "Failed to create anime." });
  }
};

// Get a single anime by ID
const getAnimeById = async (req, res) => {
  try {
    const anime = await AnimeModel.findById(req.params.id);
    if (!anime) return res.status(404).json({ error: "Anime not found." });
    res.json(anime);
  } catch (error) {
    console.error("Error fetching anime by ID:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};


const getEditAnimePage = async (req, res) => {
    try {
        const animeId = req.params.id;
        const anime = await AnimeModel.findById(animeId);

        if (!anime) {
            return res.status(404).send("Anime not found");
        }

        res.render("editAnime", { anime, layout: "layout/authlayout" });
    } catch (error) {
        console.error("Error fetching anime for edit:", error);
        res.status(500).send("Something went wrong!");
    }
};
const updateAnime = async (req, res) => {
  try {
      const { id } = req.params;
      const { title, description } = req.body;

      const updatedAnime = await AnimeModel.findByIdAndUpdate(
          id,
          { title, description },
          { new: true }
      );

      if (!updatedAnime) {
          return res.status(404).send("Anime not found");
      }

      res.redirect("/anime"); // Redirect back to anime list
  } catch (error) {
      console.error("Error updating anime:", error);
      res.status(500).send("Something went wrong!");
  }
};

// Delete anime by ID
const deleteAnime = async (req, res) => {
  try {
    const deletedAnime = await AnimeModel.findByIdAndDelete(req.params.id);
    if (!deletedAnime)
      return res.status(404).json({ error: "Anime not found." });
    res.redirect("/anime");
  } catch (error) {
    console.error("Error deleting anime:", error);
    res.status(500).json({ error: "Failed to delete anime." });
  }
};
// Show Add Anime Page
const getAddAnimePage = (req, res) => {
  res.render("addAnime"); // Ensure you have "addAnime.ejs" in your views folder
};
const postAddAnime = async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const { title, genre, description } = req.body;
    if (!title || !genre || !description) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const newAnime = new AnimeModel({ title, genre, description });
    await newAnime.save();

    res.redirect("/anime"); // Redirect to anime list after successful addition
  } catch (error) {
    console.error("❌ Error adding anime:", error);
    res.status(500).json({ error: error.message || "Something went wrong!" });
  }
};




// --- Export Controllers ---
module.exports = {
  getAllMovies,
  getUpcomingMovies,
  getAllContentTypes,
  addMovie,
  updateMovie,
  getPoster,
  getEnglishMovies,
  getIndianMovies,
  getAllWebSeries,
  getAllAnime,
  createAnime,
  getAnimeById,
  getEditAnimePage,
  updateAnime,
  deleteAnime,
  postAddAnime,
  getAddAnimePage,
};
