const mongoose = require('mongoose');

const contentTypeSchema = new mongoose.Schema({
  typeName: {
    type: String,
    required: true,
  },
});

const ContentType = mongoose.model('ContentType', contentTypeSchema);

module.exports = ContentType;
