const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Link = require("../models/Link.js");

const passport = require("passport");
require("../config/passport")(passport);

// JWT headers
getToken = function(headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(" ");
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

// @route   GET /api/links/
// @desc    Get user's links
// @access  Private
exports.getLinks = function(req, res, next) {
    passport.authenticate("jwt", { session: false });
    var token = getToken(req.headers);
    if (token) {
        Link.find(function(err, links) {
            if (err) return next(err);
            res.json(links);
        });
    } else {
        return res.status(403).send({ success: false, msg: "Unanthorized" });
    }
};

// @route   GET /api/links/:id
// @desc    Get one link
// @access  Private
exports.getLink = function(req, res, next) {
    Link.findById(req.params.id, function(err, link) {
        if (err) return next(err);
        res.json(link);
    });
};

// @route   POST /api/links/
// @desc    Post new link
// @access  Private
exports.postLink = function(req, res, next) {
    passport.authenticate("jwt", { session: false });
    var token = getToken(req.headers);
    if (token) {
        Link.create(req.body, function(err, link) {
            if (err) return next(err);
            res.json(link);
        });
    } else {
        return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
};

// @route   PUT /api/links/:id
// @desc    Updates one link
// @access  Private
exports.updateLink = function(req, res, next) {
    Link.findByIdAndUpdate(req.params.id, req.body, function(err, link) {
        if (err) return next(err);
        res.json(link);
    });
};

// @route   DELETE /api/links/:id
// @desc    Removes one link
// @access  Private
exports.deleteLink = function(req, res, next) {
    Link.findByIdAndRemove(req.params.id, req.body, function(err, link) {
        if (err) return next(err);
        res.json(link);
    });
};
