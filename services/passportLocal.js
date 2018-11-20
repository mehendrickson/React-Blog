const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;

const User = mongoose.model('users');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// const authError = 'Incorrect username or password.';
//
// passport.use(new LocalStrategy(
//   async (username, password, done) => {
//     const user = await User.findOne({username: username});
//     if(!user || !(user({ password: password }) === password)){
//       return done(null, false, {message: authError});
//     }
//     return done(null, user);
//   }
// ));