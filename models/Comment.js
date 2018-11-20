const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  name: String,
  comment: String,
  date: Date
});

module.exports = commentSchema;