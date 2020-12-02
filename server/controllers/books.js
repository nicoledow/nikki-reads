const _ = require('lodash/string');

const Book = require('../models/book');
const User = require('../models/user');

exports.likeBook = (req, res, next) => {

    const book = new Book({
        title: _.capitalize(req.body.title),
        buyURL: req.body.buyURL,
        // author: author,
        imageUrl: req.body.imageUrl,
        nytBookURI: req.body.bookURI,
        isbn10: req.body.isbn10
    });
    
    book.save()
    .then(result => {
        if (!result) {
            const error = new Error('Book could not be saved.');
            error.statusCode(500);
            throw error;
        }
        const response = {
            message: 'Book saved.',
            book: { id: book._id.toString(), title: book.title, buyURL: book.buyURL, nytBookURI: book.nytBookURI, imageUrl: book.imageUrl }
        }
        console.log(response);
        res.status(201).json(response)
    })
};

exports.getCurrentUserBooks = (req, res, next) => {
    const userId = req.params.userId;
    const user = User.findById(userId);
    
}