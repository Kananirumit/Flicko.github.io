const Indian = require("../models/indianModel");

const getIndianMovies = async (req, res) => {
    try {
      let searchQuery = req.query.search ? req.query.search.trim() : "";
      let page = parseInt(req.query.page) || 1;
      let limit = 10;
      let skip = (page - 1) * limit;
  
      const searchFilter = searchQuery
        ? { title: { $regex: searchQuery, $options: "i" } }
        : {};
  
      const totalMovies = await Indian.countDocuments(searchFilter);
      const totalPages = Math.ceil(totalMovies / limit);
  
      const indianMovies = await Indian.find(searchFilter)
        .skip(skip)
        .limit(limit);
  
      // ✅ Remove getPoster() for now
      const updatedIndianMovies = indianMovies.map((movie) => movie.toObject());
  
      // ✅ Send JSON response
      res.json({ movies: updatedIndianMovies, currentPage: page, totalPages });
    } catch (error) {
      console.error("❌ Error fetching Indian movies:", error);
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = { getIndianMovies };
  