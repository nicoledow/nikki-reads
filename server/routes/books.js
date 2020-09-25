const express = require('express');
const booksController = require('../controllers/books');
const router = express.Router();
const Book = require('../models/book');

router.post('/books', booksController.addBook);

module.exports = router;