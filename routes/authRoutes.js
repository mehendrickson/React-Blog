const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {

  app.get('/auth/currentuser', (req, res) => {
    res.send(req.user);
  });

  app.post('/auth/login', passport.authenticate('local'),(req, res) => {
    console.log('Login attempt');
    res.redirect('/');
    }
  );

  app.get('/auth/logout', (req, res) => {
      req.logout();
      res.redirect('/');
    }
  );

  app.post('/auth/register', async (req,res) => {
    const {username, password, first, last, email, location, bio} = req.body;
    const userCount = await User.count({});
    const user = new User({
      username: username,
      first: first,
      last: last,
      email: email,
      location: location,
      bio: bio,
      admin: !userCount
    });

    await user.setPassword(password);
    await user.save();

    const authUser = await User.authenticate()(username, password);

    if(authUser) res.redirect('/');
    res.status(500).send('Unable to create user.');
  });

};

// User.register(new User({ username: req.body.username }), req.body.password,
//   (err, account) => {
//     if(err){
//       res.redirect('/auth/register');
//     }
//
//     password.authenticate('local')(req, res, () => {
//       res.redirect('/');
//     })
//   })