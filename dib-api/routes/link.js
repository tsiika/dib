const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Link = require('../models/Link.js')

/* GET links */
router.get('/links', function(req, res, next) {
    Link.find(function (err, links) {
        if (err) return next(err);
        res.json(links);
    });
});

/* Get link by ID */
router.get('/links/:id', function(req, res, next ){
    Link.findById(req.params.findById, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* Save new link */
router.post('/links', function(req, res, next) {
    Link.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* Update existing link */
router.put('/links/:id', function(req, res, next) {
    Link.findOneAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* Delete link */
router.delete('/links/:id', function(req, res, next) {
    Link.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;