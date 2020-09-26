const Book = require('../models/book');

exports.addBook = (req, res, next) => {

    function formatTitle(title) {
        const lowerCaseTitle = title.toLowerCase();
        const words = lowerCaseTitle.split(' ');
        const upperCaseWords = words.map(w => {
            return w.charAt(0).toUpperCase() + w.slice(1);
        });
        
        return upperCaseWords.join(' ');
    };

    const book = new Book({
        title: formatTitle(req.body.title),
        buyURL: req.body.buyURL,
        // author: author,
        imageUrl: req.body.imageUrl,
        nytBookURI: req.body.bookURI
    });
    
    book.save()
    .then(result => {
        if (!result) {
            const error = new Error('Book could not be saved.');
            error.statusCode(500);
            throw error;
        }
        res.status(201).json({
            message: 'Book saved.',
            book: { id: book._id.toString(), title: book.title, buyURL: book.buyURL, nytBookURI: book.nytBookURI, imageUrl: book.imageUrl }
        });
    })
};