const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');



// Initializing the application
const app = express();

// Map global promise - get ride of warning.
mongoose.Promise = global.Promise;

//Connected to database
mongoose.connect(config.database)
  .then(() => console.log(`MongoDB connected..`))
  .catch((err) => console.log(`The error is ${err}`));

//const port = '1289';

// For hosting
const port = process.env.PORT || 8080;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// using body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using cors as a middle ware
app.use(cors());

// routes
app.use('/users', users);
// Index Route

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Home routing
app.get('/', (req, res) => {

  res.send('I am from home routing');
});

// somewhere routing
app.get('users/someWhere', (req, res) => {
  res.send("I am from some where routing");
});

app.listen(port, (req, res) => {
  console.log(`Server started at port ${port}`);
});
