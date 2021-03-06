const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const booksController = require('../controllers/books');

router.get('/users/:userId/currentBooks', booksController.getCurrentUserBooks)

router.post('/login', usersController.loginUser);

router.post('/users', usersController.createUser);

router.post('/users/verify', usersController.verifyUser);

module.exports = router;