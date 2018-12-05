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
// @TODO    WIP
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
// @TODO    DONE
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
// @desc    Handles login / returns JWT
// @access  Public
// @TODO    DONE
exports.handleLogin = function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    //Find user by username
    User.findOne({ username }).then(user => {
        //Check for user
        if (!user) {
            return res.status(404).json({ msg: "User not found!" });
        }
        //Checks password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matches

                // Create JWT payload
                const payload = {
                    id: user.id,
                    name: user.username
                };

                // Sign JWT token
                jwt.sign(
                    payload,
                    settings.secretOrKey,
                    {
                        expiresIn: 36000
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res.status(400).json({ msg: "Incorrect password!" });
            }
        });
    });
};

// @route   POST /api/auth/current
// @desc    Returns current user
// @access  Private
// @TODO    Todo
exports.currentUser = (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username
    });
};
