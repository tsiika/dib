const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Link = require('../models/Link.js');
const User = require('../models/User.js');

const passport = require('passport');
require('../config/passport')(passport);

// JWT headers
getToken = function(headers) {
    if(headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if(parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

/* GET links */
exports.getLinksWithUser = function (req, res, next) {
//passport.authenticate('jwt',  { session: false }) 
    //var token = getToken(req.headers);
    //if(token) {
        Link.find({})
            .populate('user', '_id')
            .exec(function(err, user) {
                if(err) throw err;
                    console.log(user);
                    res.json(user);
            });
    } 

exports.getUserWithLinks = function (req, res, next) {
    User.find({})
        .populate('links', '_id')
        .exec(function(err, links) {
            if(err) throw err;
                console.log(links);
                res.json(links);
        });
    }


