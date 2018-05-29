const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const port = process.env.PORT || 5000;


const api = require('./routes/link');
const user = require('./routes/user');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
//app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/', api);
app.use('/api/', user);

// Options
app.options('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send('OPTIONS response');
});


app.get('/api/test', function(req, res) {
    res.json({message: "dib"});
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
    res.status(500).json({ "message": "Internal Server Error" });
    
});


//MongoDB
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/dib', {
    promiseLibrary: require('bluebird')})
        .then(()=> console.log('Connection to database successful'))
        .catch((err) => console.log(err));


// Setting port
app.listen(port, function(){
    console.log('Server is running on port:', port);
});

module.exports = app;
