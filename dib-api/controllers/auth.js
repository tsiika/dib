const mongoose = require("mongoose");
const passport = require("passport");
const settings = require("../config/settings");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../models/User");

// @route   GET /api/auth/profile
// @desc    Get user profile (To be changed to own controller.)
// @access  Private
exports.getUser = function(req, res) {
    passport.authenticate("jwt", { session: false });
    var token = getToken(req.headers);
    if (token) {
        User.findOneById(req.params._id, function(err, user) {
            if (err) return next(err);
            res.json(user);
        });
    } else {
        return res.status(403).send({ success: false, msg: "Unanthorized" });
    }
};

// @route   POST /api/auth/register
// @desc    Registering new user
// @access  Public
exports.registerUser = function(req, res) {
    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            return res
                .status(400)
                .json({ username: "Username already exists!" });
        } else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(console.log(err));
                });
            });
        }
    });
};

// @route   POST /api/auth/login
// @desc    Handles login
// @access  Public
exports.handleLogin = function(req, res) {
    User.findOne(
        {
            username: req.body.username
        },
        function(err, user) {
            if (err) throw err;

            if (!user) {
                res.status(401).send({
                    success: false,
                    msg: "Authentication failed, user not found!"
                });
            } else {
                // Comparing passwords
                user.comparePassword(req.body.password, function(err, isMatch) {
                    if (isMatch && !err) {
                        // If username if found and password is correct, create login token.
                        var token = jwt.sign(user.toJSON(), settings.secret);
                        // Return information with token as JSON.
                        res.json({ success: true, token: "JWT " + token });
                    } else {
                        res.status(401).send({
                            success: false,
                            msg: "Authentication failed, wrong password!"
                        });
                    }
                });
            }
        }
    );
};
