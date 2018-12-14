var mongoose = require("mongoose");
var config = require("../config/settings"); // use your own config file (for server port and mongoDB connection)

mongoose.Promise = global.Promise;

before(function(done) {
    mongoose.connect(config.mongoURI);
    mongoose.connection
        .once("open", function() {
            console.log("Connected to database!");
            done();
        })
        .on("error", function(error) {
            console.log("Connection error", error);
        });
});
