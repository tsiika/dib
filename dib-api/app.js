const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport')

const links = require('./api/routes/link');
const auth = require('./api/routes/auth');
const profile = require('./api/routes/profile');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// MongoDB configuration
const db = require('./config/settings');

// Connection to DB
mongoose
    .connect(db.mongoURI)
    .then(() => console.log('MongoDB connection established!'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport configuration
require('./config/passport');

// Routes
app.use('/api/links', links);
app.use('/api/auth', auth);
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));