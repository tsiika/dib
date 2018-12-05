const express = require("express");
const router = express.Router();
const auth_controller = require("../controllers/auth");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// GET request for list of all Link items.
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
);

module.exports = router;
