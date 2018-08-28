var mocha = require('mocha');
var assert = require('assert');
var User = require('../models/User');

// Describe test
describe('Test for saving new user.', function(){
        //Create test
        it("New link saved to database", function(done){
            var user = new User({
                username:"Käyttäjä",
                password:"salasana1234",
            });
        
            user.save().then(function(){
                assert(user.isNew === false);
                return done();
            }); 
    });
});