const axios = require("axios");

const fetchMoviePoster = async (title) => {
  try {
    const apiKey = process.env.OMDB_API_KEY || "74a6f5ec";
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

    // Set timeout to 5 seconds
    const response = await axios.get(url, { timeout: 5000 });

    const data = response.data;
    if (data.Response === "True" && data.Poster !== "N/A") {
      return data.Poster;
    } else {
      return "/assets/img/default-poster.jpg";
    }
  } catch (error) {
    console.error("❌ Error fetching poster:", error.message);
    return "/assets/img/default-poster.jpg";
  }
};

module.exports = fetchMoviePoster;
