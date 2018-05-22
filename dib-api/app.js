const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const api = require('./routes/api');
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

// Setting port
app.listen(5000);

module.exports = app;
