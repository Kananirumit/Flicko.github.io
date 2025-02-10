const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require('express-session');
const axios = require("axios");
const route = require("./router");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const Content = require("./models/hollywoodModel");



app.use(session({
  secret: "jgdg",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure: true in production (HTTPS)
}));
const connectMongoDB = async () => {
  const dbUrl = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/movieDB";
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");

    const moviesCount = await Content.countDocuments();
    if (moviesCount === 0) {
      console.log("📥 Importing movies from CSV...");
      await importMoviesFromCSV();
    }
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
};

const fetchMoviePoster = async (title) => {
  try {
    const apiKey = process.env.OMDB_API_KEY || '74a6f5ec';
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;
    
    const response = await axios.get(url);
    const data = response.data;

    if (data.Response === "True") {
      return data.Poster !== "N/A" ? data.Poster : "assets/img/default-poster.jpg";
    } else {
      return "assets/img/default-poster.jpg";
    }
  } catch (error) {
    console.error("❌ Error fetching poster:", error);
    return "assets/img/default-poster.jpg";
  }
};

app.use(expressEjsLayouts);
app.set("layout", "layout/layout");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/dashboard", async (req, res) => {
  try {
    const movies = await Content.find();

    const updatedMovies = await Promise.all(movies.map(async (movie) => {
      movie.posterUrl = await fetchMoviePoster(movie.title);
      return movie;
    }));

    res.render("dashboard", { movies: updatedMovies });
  } catch (err) {
    console.error("❌ Error fetching movies:", err);
    res.status(500).send("Server Error");
  }
});

app.use("/", route);

const startServer = async () => {
  await connectMongoDB();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
};

startServer();
