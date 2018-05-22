const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const api = require('./routes/link');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/', api);


// 404
app.use(function(req, res, next) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

// Error handler
app.use(function(err, req, res, next) {
    // Locals for development errors
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Error render
    res.status(err.status || 500);
    res.render('error');
});

//MongoDB
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/dib', {
    useMongoClient: true,
    promiseLibrary: require('bluebird')})
        .then(()=> console.log('Connection successful'))
        .then(()=> console.log('Listening to port 5000'))
        .catch((err) => console.log(err));


// Setting port
app.listen(5000);

module.exports = app;
