const express = require('express');
const mongoose = require('mongoose');
//Middleware imports
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
//Start models and services
require('./models/User');
require('./models/Article');
require('./models/Comment');
require('./services/passportLocal');

//Custom files
const config = require('./config/config');

const app = express();

//Middleware Binding
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Mongoose config
mongoose.connect(config.mongoRWUri);

//Pass app to routing scripts
require('./routes/authRoutes')(app);
require('./routes/publishRoutes')(app);

//Change up the routing for production environment (this way you can run locally using proxy in client easily)
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Start the app!
const PORT = process.env.PORT || 5000;
app.listen(PORT);