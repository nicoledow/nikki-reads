const Book = require('../models/book');

exports.addBook = (req, res, next) => {
    // const author = Author.findByID()
    const book = new Book({
        buyURL: req.body.buyURL,
        // author: author,
        imageUrl: req.body.imageUrl,
        nytBookURI: req.body.bookURI
    });

    book.save()
    .then(result => {
        // debugger;
        res.status(201).json({
            message: 'Book saved.',
            book: book._id
        });
    })
};