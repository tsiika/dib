var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var link_popu = require('../controllers/link_population');
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

router.get('/links/user/:id', link_popu.getLinksWithUser);

router.get('/user/:id/links/', link_popu.getUserWithLinks);

module.exports = router;