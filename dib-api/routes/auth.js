const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

router.post('/register', function(req, res) {
    if(!req.body.username || !req.body.password) {
        res.json({ success: false, msg: 'Please enter username and password.'});
    } else {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        // Saving new user
        newUser.save(function(err) {
            if(err) {
                return res.json({ success: false, msg: 'Username already exists!'});
            }
            res.json({ success: true, msg: 'User created successfully.'});
        });
    }
});

router.post('/login', function(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if(err) throw err;

        if(!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed, user not found!'});
        } else {
            // Comparing passwords
            user.comparePassword(req.body.password, function(err, isMatch) {
                if(isMatch && !err) {
                    // If username if found and password is correct, create login token.
                    var token = jwt.sign(user.toJSON(), settings.secret);
                    // Return information with token as JSON.
                    res.json({ success: true, token: 'JWT ' + token});
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed, wrong password!'});
                }
            });
        }
    });
});

module.exports = router;