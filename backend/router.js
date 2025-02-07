const express = require("express");
const router = express.Router();
const Content = require("./models/movieModel"); // ✅ Import Content model
const fetchMoviePoster = require("./fetchMoviePoster"); // ✅ Ensure correct import

// Import controllers
const homeController = require("./controller/homeController");
const userController = require("./controller/userController");

// Home Routes
router.get("/movies", homeController.getAllContent);
router.get("/movies/genre/:genreId", homeController.getMoviesByGenre);
router.get("/movies/:id/details", homeController.getMovieDetails);
router.get("/genres", homeController.getAllGenres);
router.get("/upcoming-movies", homeController.getUpcomingMovies);
router.get("/content-types", homeController.getAllContentTypes);
router.post("/add-movie", homeController.addMovie);

// User Routes
router.post("/register", userController.registerUser);
router.get("/user/:userId", userController.getUserProfile);
router.post("/watchlist", userController.addToWatchlist);
router.get("/watchlist/:userId", userController.getUserWatchlist);
router.delete("/watchlist/:userId/:contentId", userController.removeFromWatchlist);
router.post("/rating", userController.submitRating);

router.get("/index", async (req, res) => {
  try {
      const movies = await Content.find();

      // ✅ Fetch posters for each movie
      const updatedMovies = await Promise.all(
          movies.map(async (movie) => {
              const posterUrl = await fetchMoviePoster(movie.title);
              return { ...movie.toObject(), posterUrl }; // Add poster to movie object
          })
      );

      res.render("index", { movies: updatedMovies });
  } catch (err) {
      console.error("❌ Error fetching movies:", err);
      res.render("index", { movies: [] });
  }
});
module.exports = router;