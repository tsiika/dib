const mongoose = require("mongoose");
const Link = require("../../models/Link.js");
const express = require("express");
const router = express.Router();


/* const passport = require("passport");
require("../config/passport")(passport); */

router.get('/', (req, res) => res.json({ msg: 'Users works!' }));
// JWT headers
// TODO     WIP

// @route   GET /api/links/
// @desc    Get user's links
// @access  Private
// TODO     WIP


// @route   GET /api/links/:id
// @desc    Get one link
// @access  Private
// @TODO     WIP


// @route   POST /api/links/
// @desc    Post new link
// @access  Private
// @TODO     WIP


// @route   PUT /api/links/:id
// @desc    Updates one link
// @access  Private
// @TODO     WIP


// @route   DELETE /api/links/:id
// @desc    Removes one link
// @access  Private
// @TODO     WIP

module.exports = router;

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