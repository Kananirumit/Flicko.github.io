const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
  dateAdded: { type: Date, default: Date.now },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
