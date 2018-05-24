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
    Link.findById(req.params.id, function(err, link) {
        if (err) return next(err);
        res.json(link);
    });
});


/* Save new link */
router.post('/links', function(req, res, next) {
    Link.create(req.body, function(err, link) {
        if (err) return next(err);
        res.json(link);
    });
});

/* Update existing link */
router.put('/links/:id', function(req, res, next) {
    Link.findOneAndUpdate(req.params.id, req.body, function(err, link) {
        if (err) return next(err);
        res.json(link);
    });
});

/* Delete link */
router.delete('/links/:id', function(req, res, next) {
    Link.findByIdAndRemove(req.params.id, req.body, function(err, link) {
        if (err) return next(err);
        res.json(link);
    });
});

module.exports = router;