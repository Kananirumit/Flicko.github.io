const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const axios = require("axios"); // ✅ Added axios for API calls
const route = require("./router");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ✅ Import Content model
const Content = require("./models/movieModel"); 

// ✅ MongoDB Connection
const connectMongoDB = async () => {
  const dbUrl = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/movieDB";
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");

    // ✅ Run only ONCE instead of every restart
    const moviesCount = await Content.countDocuments();
    if (moviesCount === 0) {
      console.log("📥 Importing movies from CSV...");
      await importMoviesFromCSV();
    }

  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
};

// ✅ Function to Fetch Movie Poster from API
const fetchMoviePoster = async (title) => {
  try {
    const apiKey = process.env.OMDB_API_KEY || '74a6f5ec';  // 🔑 Use your OMDB/TMDB API key
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${'74a6f5ec'}`;

    const response = await axios.get(url);
    const data = response.data;

    if (data.Response === "True") {
      return data.Poster !== "N/A" ? data.Poster : "assets/img/default-poster.jpg";
    } else {
      return"assets/img/default-poster.jpg"; // ✅ Fallback image
    }
  } catch (error) {
    console.error("❌ Error fetching poster:", error);
    return "assets/img/default-poster.jpg"; // ✅ Return fallback image on error
  }
};

// ✅ Middleware
app.use(expressEjsLayouts);
app.set("layout", "layout/layout");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Route to Fetch Movies and Pass to Frontend
app.get("/dashboard", async (req, res) => {
  try {
    const movies = await Content.find();

    // ✅ Fetch posters for each movie
    for (let movie of movies) {
      movie.posterUrl = await fetchMoviePoster(movie.title);
    }

    res.render("dashboard", { movies });
  } catch (err) {
    console.error("❌ Error fetching movies:", err);
    res.status(500).send("Server Error");
  }
});

// ✅ Routes
app.use("/", route);

// ✅ Start Server AFTER DB Connection
const startServer = async () => {
  await connectMongoDB();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
};

// ✅ Initialize Server
startServer();
