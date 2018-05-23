const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User.js')

/*  GET users
    Remember to clean up these in the production build.
*/
router.get('/', function(req, res, next) {
    Link.find(function (err, users) {
        if (err) return next(err);
        res.json(links);
    });
});

/* Get user by ID */
router.get('/:id', function(req, res, next ){
    User.findById(req.params.findById, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* Save new user */
router.post('/', function(req, res, next) {
    User.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* Update existing user */
router.put('/:id', function(req, res, next) {
    User.findOneAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* Delete user */
router.delete('/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;