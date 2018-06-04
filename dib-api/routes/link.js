const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Link = require('../models/Link.js');

const passport = require('passport');
require('../config/passport')(passport);

/* GET links */
router.get('/links', passport.authenticate('jwt',  { session: false }), function(req, res, next) {
    var token = getToken(req.headers);
    if(token) {
        Link.find(function (err, links) {
            if (err) return next(err);
            res.json(links);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unanthorized'});
    }
});

/* Get link by ID */
router.get('/links/:id', function(req, res, next ){
    Link.findById(req.params.id, function(err, link) {
        if (err) return next(err);
        res.json(link);
    });
});


/* Save new link */
router.post('/links', passport.authenticate('jwt', { session: false}), function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        Link.create(req.body, function(err, link) {
            if (err) return next(err);
            res.json(link);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

/* Update existing link */
router.put('/links/:id', function(req, res, next) {
    Link.findByIdAndUpdate(req.params.id, req.body, function(err, link) {
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

getToken = function(headers) {
    if(ehaders && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if(parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

module.exports = router;