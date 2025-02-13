const User = require("../models/userModel");
const Watchlist = require("../models/watchListModel");
const Rating = require("../models/ratingsModel");
const bcrypt = require("bcrypt");






// ✅ Get User List
const getUserList = async (req, res) => {
  try {
    const users = await User.find({}, "firstName lastName email role");

    res.render("index", {
      users,
      currentPage: 1,
      totalPages: 1,
      loggedInUser: req.session.user || { role: "user" }, // ✅ Use session data
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Register User
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // ❌ No hashing, store password as plain text
    const newUser = new User({ firstName, lastName, email, password, role });
    await newUser.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User Not Found:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // ✅ Compare plain-text password directly
    if (password !== user.password) {
      console.log("❌ Password does not match");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // ✅ Save user session
    req.session.user = { _id: user._id, role: user.role, email: user.email };

    console.log("✅ Login Successful:", user.email);
    res.redirect("/index");
  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ message: err.message });
  }
};


// ✅ Get User Profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Edit User (Fix: Password updates properly)
const editUser = async (req, res) => {
  try {
    const { firstName, lastName, email, role, password } = req.body;
    const updateData = { firstName, lastName, email, role };

    // ✅ Hash password only if provided
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.userId, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.redirect("/index"); // ✅ Redirect to user list
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete User
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.redirect("/index");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add to Watchlist
const addToWatchlist = async (req, res) => {
  try {
    const { userId, contentId } = req.body;
    const newWatchlistItem = new Watchlist({ userId, contentId });
    await newWatchlistItem.save();
    res.status(201).json(newWatchlistItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get User Watchlist
const getUserWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.find({ userId: req.params.userId }).populate("contentId");
    res.json(watchlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Remove from Watchlist
const removeFromWatchlist = async (req, res) => {
  try {
    const watchlistItem = await Watchlist.findOneAndDelete({ userId: req.params.userId, contentId: req.params.contentId });
    if (!watchlistItem) {
      return res.status(404).json({ message: "Watchlist item not found" });
    }
    res.json({ message: "Content removed from watchlist" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Submit Rating
const submitRating = async (req, res) => {
  try {
    const { userId, contentId, rating, review } = req.body;
    const newRating = new Rating({ userId, contentId, rating, review });
    await newRating.save();
    res.status(201).json(newRating);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Logout User
const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error logging out" });
    }
    res.redirect("/login");
  });
};

// ✅ Export Functions
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  addToWatchlist,
  getUserWatchlist,
  removeFromWatchlist,
  submitRating,
  getUserList,
  editUser,
  deleteUser,
  logoutUser,
};
