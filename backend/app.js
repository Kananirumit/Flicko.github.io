const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const route = require("./router");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// MongoDB Connection
const dbUrl = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/movieDB";
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Middleware
app.use(expressEjsLayouts);
app.set("layout", "layout/layout");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", route);

// Server Listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});