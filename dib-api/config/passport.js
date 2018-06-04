const   JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt;

// User model
var User = require('../models/User');
var settings = require('./settings'); // Settings file

module.exports = function(passport) {
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = settings.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload._id}, function(err, user) {
            if(err) {
                return done(err, false);
            }
            if(user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};