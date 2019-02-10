const mongoose = require("mongoose");
const passport = require("passport");
const settings = require("../../config/settings");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../../models/User");

// Load validators
const validateLogin = require("../../validation/login");
const validateRegister = require("../../validation/register");

// @route   GET /api/auth/profile
// @desc    Get user profile (To be changed to own controller.)
// @access  Private
// @TODO    WIP
router.get('/profile',(req, res) => {
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
})
/* 
// @route   POST /api/auth/register
// @desc    Registering new user
// @access  Public
// @TODO    DONE
exports.registerUser = function(req, res) {
    const { errors, isValid } = validateRegister(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

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
    const { errors, isValid } = validateLogin(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    //Find user by username
    User.findOne({ username }).then(user => {
        //Check for user
        if (!user) {
            return res.status(404).json(errors);
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
                errors.password = "Incorrect password!"
                    .status(400)
                    .json(errors);
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



/* // GET request for list of all Link items.
router.get("/profile", auth_controller.getUser);

// POST request for saving new link.
router.post("/register", auth_controller.registerUser);

// POST request for login handling.
router.post("/login", auth_controller.handleLogin);

// GET request for logged in user
router.get(
    "/current",
    passport.authenticate("jwt", { session: false }),
    auth_controller.currentUser
); */ 

module.exports = router;