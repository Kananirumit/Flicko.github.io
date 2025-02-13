const mongoose = require("mongoose");

const ContentGenreSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

// ✅ Check if model already exists before defining it
const ContentGenre = mongoose.models.ContentGenre || mongoose.model("ContentGenre", ContentGenreSchema);

module.exports = ContentGenre;
