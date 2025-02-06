const User = require('../models/userModel');
const Watchlist = require('../models/watchListModel');
const Rating = require('../models/ratingsModel');

// --- User and Watchlist Controller ---
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
    const newUser = new User({ firstName, lastName, email, password, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addToWatchlist = async (req, res) => {
  try {
    const { userId, contentId } = req.body;
    const user = await User.findById(userId);
    const content = await Content.findById(contentId);

    if (!user || !content) {
      return res.status(404).json({ message: 'User or Content not found' });
    }

    const newWatchlistItem = new Watchlist({ userId, contentId });
    await newWatchlistItem.save();
    res.status(201).json(newWatchlistItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserWatchlist = async (req, res) => {
  try {
    const { userId } = req.params;
    const watchlist = await Watchlist.find({ userId }).populate('contentId');
    res.json(watchlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeFromWatchlist = async (req, res) => {
  try {
    const { userId, contentId } = req.params;
    const watchlistItem = await Watchlist.findOneAndDelete({ userId, contentId });
    if (!watchlistItem) {
      return res.status(404).json({ message: 'Watchlist item not found' });
    }
    res.json({ message: 'Content removed from watchlist' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const submitRating = async (req, res) => {
  try {
    const { userId, contentId, rating, review } = req.body;
    const user = await User.findById(userId);
    const content = await Content.findById(contentId);

    if (!user || !content) {
      return res.status(404).json({ message: 'User or Content not found' });
    }

    const newRating = new Rating({ userId, contentId, rating, review });
    await newRating.save();
    res.status(201).json(newRating);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  registerUser,
  getUserProfile,
  addToWatchlist,
  getUserWatchlist,
  removeFromWatchlist,
  submitRating
};
