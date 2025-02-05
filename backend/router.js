const express = require("express");
const homecon = require("./controller/homeController");
const route = express.Router();

route.get("/index", (req, res) => {
  res.render("index");
});
route.get("/about", (req, res) => {
  res.render("about");
});
route.get("/portfolio-overview", (req, res) => {
  res.render("portfolio-overview");
});
route.get("/pricing", (req, res) => {
  res.render("pricing");
});
route.get("/blog-home", (req, res) => {
  res.render("blog-home");
});
route.get("/blog-post", (req, res) => {
  res.render("blog-post");
});
route.post("/contactpost", homecon.contactPost);
route.get("/contact", (req, res) => {
  res.render("contact");
});
route.get("/faq", (req, res) => {
  res.render("faq");
});
route.get("/portfolio-item", (req, res) => {
  res.render("portfolio-item");
});

module.exports = route;
