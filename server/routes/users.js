const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.post('/login', usersController.loginUser);

router.post('/users', usersController.createUser);

router.get('/users/verify', usersController.verifyUser);

module.exports = router;