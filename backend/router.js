const express = require("express");
const router = express.Router();
const homeController = require("./controller/homeController");
const homeApiController = require("./controller/homeApiController");
const userController = require("./controller/userController");
const User = require("./models/userModel");
const AnimeModel = require("./models/animeModel");
const English = require("./models/EnglishModel");
const Indian = require("./models/indianModel"); 
const webSeries = require("./models/webseriesModel")

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
router.get("/hollywood/edit/:id", homeController.getEditEnglishPage);
router.post("/hollywood/update/:id", homeController.updateEnglish);
router.get("/hollywood/delete/:id", homeController.deleteEnglish);
router.get("/addenglish", homeController.getAddEnglishPage);
router.post("/addenglish", async (req, res) => {
    try {
      console.log("🔹 Received Data:", req.body);

  
      const { title, rating, genre, cast, runtime } = req.body;
  
      if (!title || !rating || !genre || !cast || !runtime) {
        return res.status(400).json({ error: "All fields are required!" });
      }
  
      const newEnglish = new English({ title, rating, genre, cast, runtime });
      await newEnglish.save();
  
      res.redirect("/hollywood");
    } catch (error) {
      console.error("❌ Error adding English movie:", error);
      res.status(500).json({ error: error.message || "Something went wrong!" });
    }
  });

  router.get("/indian/edit/:id", homeController.getEditIndianPage);
  router.post("/indian/update/:id", homeController.updateIndian);
  router.get("/indian/delete/:id", homeController.deleteIndian);
  router.get("/addindian", homeController.getAddIndianPage);
  router.post("/addindian", async (req, res) => {
      try {
        console.log("🔹 Received Data:", req.body);
  
    
        const { title, year, genre, director, cast,overview } = req.body;
    
        if (!title || !year || !genre || !director || !cast || !overview) {
          return res.status(400).json({ error: "All fields are required!" });
        }
    
        const newIndian = new Indian({ title, year, genre,director ,cast, overview });
        await newIndian.save();
    
        res.redirect("/indian");
      } catch (error) {
        console.error("❌ Error adding Indian movie:", error);
        res.status(500).json({ error: error.message || "Something went wrong!" });
      }
    });
  
    router.get("/webseries/edit/:id", homeController.getEditWebseriesPage);
    router.post("/webseries/update/:id", homeController.updateWebseries);
    router.get("/webseries/delete/:id", homeController.deleteWebseries);
    router.get("/addwebseries", homeController.getAddWebseriesPage);
    router.post("/addwebseries", async (req, res) => {
        try {
          console.log("🔹 Received Data:", req.body);
    
      
          const { title, yearReleased, contentRating, rating, genre,noofSeasons, streamingPlatform} = req.body;
      
          if (!title || !yearReleased || !contentRating|| !rating || !genre || !noofSeasons || !streamingPlatform ) {
            return res.status(400).json({ error: "All fields are required!" });
          }
      
          const newWebseries = new webSeries({ title, yearReleased, contentRating,rating ,genre, noofSeasons,streamingPlatform });
          await newWebseries.save();
      
          res.redirect("/webseries");
        } catch (error) {
          console.error("❌ Error adding Webseires:", error);
          res.status(500).json({ error: error.message || "Something went wrong!" });
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


// router.get("/api/index-movies", homeController.getMoviesForIndex);
router.get("/api/indian",homeApiController.getIndianMovies);

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
