const express = require('express');
const router = express.Router();

// Import controllers
const homeController = require('./controller/homeController');
const userController = require('./controller/userController');

// home controller Routes
router.get('/content', homeController.getAllContent);
router.get('/content/:genreId', homeController.getMoviesByGenre);
router.get('/content/:id/details', homeController.getMovieDetails);
router.get('/genres', homeController.getAllGenres);
router.get('/upcoming-movies', homeController.getUpcomingMovies);
router.get('/content-types', homeController.getAllContentTypes);

// User Routes
router.post('/register', userController.registerUser);
router.get('/user/:userId', userController.getUserProfile);
router.post('/watchlist', userController.addToWatchlist);
router.get('/watchlist/:userId', userController.getUserWatchlist);
router.delete('/watchlist/:userId/:contentId', userController.removeFromWatchlist);
router.post('/rating', userController.submitRating);

module.exports = router;
