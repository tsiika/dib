var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var link_controller = require('../controllers/link');


// GET request for list of all Link items.
router.get('/links', link_controller.getLinks);

// GET request for one link item by id.
router.get('/links/:id', link_controller.getLink);

// POST request for saving new link.
router.post('/links', link_controller.postLink);

// PUT request to modifyt content of existing link by id.
router.put('/links/:id', link_controller.updateLink);

// DELETE request for link deletion by id.
router.delete('/links/:id', link_controller.deleteLink);

module.exports = router;