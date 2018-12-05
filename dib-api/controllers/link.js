const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Link = require("../models/Link.js");

const passport = require("passport");
require("../config/passport")(passport);

// JWT headers
// TODO     WIP
getToken = function(headers) {};

// @route   GET /api/links/
// @desc    Get user's links
// @access  Private
// TODO     WIP
exports.getLinks = function(req, res, next) {};

// @route   GET /api/links/:id
// @desc    Get one link
// @access  Private
// @TODO     WIP
exports.getLink = function(req, res, next) {};

// @route   POST /api/links/
// @desc    Post new link
// @access  Private
// @TODO     WIP
exports.postLink = function(req, res, next) {};

// @route   PUT /api/links/:id
// @desc    Updates one link
// @access  Private
// @TODO     WIP
exports.updateLink = function(req, res, next) {};

// @route   DELETE /api/links/:id
// @desc    Removes one link
// @access  Private
// @TODO     WIP
exports.deleteLink = function(req, res, next) {};
