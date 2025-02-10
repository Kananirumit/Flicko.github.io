const axios = require("axios");

const fetchMoviePoster = async (title) => {
  try {
    const apiKey = process.env.OMDB_API_KEY || "74a6f5ec"; 
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;
  

    const response = await axios.get(url, { timeout: 2000 }); // ✅ Reduce timeout to 2s

    if (response.data.Response === "True" && response.data.Poster !== "N/A") {
      return response.data.Poster;
    } else {
      return "/assets/img/default-poster.jpg"; // ✅ Fallback poster
    }
  } catch (error) {
    console.error("❌ Error fetching poster:", error.message);
    return "/assets/img/default-poster.jpg"; // ✅ Prevent app from breaking
  }
};

module.exports = fetchMoviePoster;
