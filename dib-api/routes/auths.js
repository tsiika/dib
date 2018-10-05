var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/auth');

// GET request for list of all Link items.
router.get('/profile', auth_controller.getUser);

// POST request for saving new link.
router.post('/register', auth_controller.registerUser);

// POST request for login handling.
router.post('/login', auth_controller.handleLogin);

module.exports = router;