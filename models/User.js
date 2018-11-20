const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  username: String,
  first: String,
  last: String,
  email: String,
  location: String,
  bio: String,
  admin: Boolean
});

userSchema.plugin(passportLocalMongoose);

mongoose.model('users', userSchema);