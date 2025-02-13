const mongoose = require("mongoose");

const ContentGenreSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true } // Example: "Action", "Comedy", "Drama"
});

const ContentGenre = mongoose.model("ContentGenre", ContentGenreSchema);

module.exports = ContentGenre;
