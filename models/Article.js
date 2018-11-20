const mongoose = require('mongoose');
const { Schema } = mongoose;
const CommentSchema = require('./Comment');

const articleSchema = new Schema ({
  title: String,
  body: String,
  comments: [CommentSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  publishDate: Date
});

mongoose.model('articles', articleSchema);