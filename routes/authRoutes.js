const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {

  app.get('/auth/checkuser/:username', async (req, res) => {
    console.log(req.params);
    const user = await User.find({username: req.params.username}).limit(1);
    console.log(user);
    if(user.length > 0) res.status(400).send("User exists");
    else res.status(200).send();
  });

  app.get('/auth/currentuser', (req, res) => {
    res.send(req.user);
  });

  app.post('/auth/login', passport.authenticate('local'),(req, res) => {
    console.log('Login attempt');
    res.send('/');
    }
  );

  app.get('/auth/logout', (req, res) => {
      req.logout();
      res.redirect('/console');
    }
  );

  app.post('/auth/register', async (req,res) => {
    console.log('Req body', req.body);
    const {username, password, first, last, email, location, bio} = req.body;
    const userCount = await User.countDocuments().catch();
    const user = new User({
      username: username,
      first: first,
      last: last,
      email: email,
      location: location,
      bio: bio,
      admin: !userCount
    });

    try {
      await user.setPassword(password);
      await user.save();

      const authUser = await User.authenticate()(username, password);

      console.log('Auth User', authUser);

      if(authUser) await res.status(200).send(authUser);
      await res.status(500).send('Unable to create user.');
    }
    catch(err){
      console.log('Registration of new user failed', err);
    }
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