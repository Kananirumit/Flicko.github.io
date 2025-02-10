const mongoose = require("mongoose");

const webSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year_released: { type: Number, required: true },
  Content_rating:{type:Number,required:true},
  rating:{type:Number,required:true},
  posterUrl: { type: String, required: true },
  genre: { type: String, required: true } ,
  noofseasons: { type: String, required: true },
  Description: { type: String, required: true },
  Streaming_Platform: { type: String, required: true },
});

// Create Model
const Web = mongoose.model("Web", webSchema);
module.exports = Web;
