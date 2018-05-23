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

// Options
app.options('*', function (req, res, next) {

    res.set('Access-Control-Allow-Origin', req.headers.origin);
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    res.send('OPTIONS response');
});


// 404
app.use((req, res, next) => {
    res.status(404).json({ "message": "Resource not found" });
});

// Error handler
app.use(function(err, req, res, next) {
    // Locals for development errors
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // Error render
    res.status(500).json({ "message": "Error" });
    
});

//MongoDB
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/dib', {
    promiseLibrary: require('bluebird')})
        .then(()=> console.log('Connection to database successful'))
        .then(()=> console.log('Listening to port [5000]'))
        .catch((err) => console.log(err));


// Setting port
app.listen(5000);

module.exports = app;
