const express = require("express");
const router = express.Router();
const homeController = require("./controller/homeController");
const userController = require("./controller/userController");
const User = require("./models/userModel");
const AnimeModel = require("./models/animeModel");

// 🏠 Home Routes
router.get("/movies", homeController.getAllMovies);
// router.get("/movies/genre/:genreId", homeController.getMoviesByGenre);
// router.get("/movies/:id/details", homeController.getMovieDetails);
// router.get("/genres", homeController.getAllGenres);
router.get("/upcoming-movies", homeController.getUpcomingMovies);
// router.get("/content-types", homeController.getAllContentTypes);
router.post("/add-movie", homeController.addMovie);
router.put("/update-movie/:id", homeController.updateMovie);
router.get("/hollywood", homeController.getEnglishMovies); 
router.get("/indian", homeController.getIndianMovies);
router.get("/webseries", homeController.getAllWebSeries);
router.get("/anime",homeController.getAllAnime);
router.get("/anime/edit/:id", homeController.getEditAnimePage);
router.post("/anime/update/:id", homeController.updateAnime);
router.get("/anime/delete/:id", homeController.deleteAnime);
router.get("/addanime", homeController.getAddAnimePage);
router.post("/addanime", async (req, res) => {
    try {
        const newAnime = new AnimeModel(req.body);
        await newAnime.save();
        
        // ✅ Redirect to the anime page instead of sending JSON
        res.redirect("/anime");
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Something went wrong!" });
    }
});







router.get("/index", (req, res) => {
    res.render("index");  // Default homepage
});
router.get("/user", userController.getUserList);
// router.get("/index", userController.getUserList);
router.get("/edit/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send("Invalid User ID");
        }
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.render("editUser", { user, layout: "layout/authlayout" });
    } catch (error) {
        console.error("❌ Error fetching user:", error);
        res.status(500).send("Server error: " + error.message);
    }
});

router.post("/update/:id", async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/index");
    } catch (error) {
        console.error("❌ Error updating user:", error);
        res.status(500).send("Server error: " + error.message);
    }
});

router.get("/delete/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send("Invalid User ID");
        }
        await User.findByIdAndDelete(req.params.id);
        res.redirect("/index");
    } catch (error) {
        console.error("❌ Error deleting user:", error);
        res.status(500).send("Server error: " + error.message);
    }
});

// 🔐 User Routes
router.post("/register", userController.registerUser);
router.get("/user/:userId", userController.getUserProfile);
router.post("/watchlist", userController.addToWatchlist);
router.get("/watchlist/:userId", userController.getUserWatchlist);
router.delete("/watchlist/:userId/:contentId", userController.removeFromWatchlist);

// 🔓 Login Routes
router.get("/login", (req, res) => res.render("login", { layout: "layout/authlayout" }));
router.post("/login", userController.loginUser);
router.get("/logout", userController.logoutUser);

module.exports = router;
