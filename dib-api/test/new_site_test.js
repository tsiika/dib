var mocha = require('mocha');
var assert = require('assert');
var Link = require('../models/Link');

// Describe test
describe('Test for saving new link.', function(){
        //Create test
        it("New link saved to database", function(done){
            var link = new Link({
                name:"foobar",
                description:"Nice website!",
                url:"https://foo.bar",

            });
            link.save().then(function(){
                assert(link.isNew === false);
                done();
            }); 
        });
});