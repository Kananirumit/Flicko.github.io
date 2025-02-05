const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const route = require("./router");

const app = express();

const dbUrl = "mongodb://127.0.0.1:27017/contact";
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(expressEjsLayouts);
app.set("layout", "layout/layout");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});