const _ = require("lodash/string");

const Book = require("../models/book");
const User = require("../models/user");

exports.likeBook = (req, res, next) => {
  console.log('req body', req.body);

  const user = User.findById(req.body.user.id);
  
  Book.findOne({ isbn10: req.body.isbn10 })
    .then(book => {

      if (book) {
        book.userIds.push(user._id.toString())
        res.status(200).json({message: 'Success'});
      } else {
        const newBook = new Book({
              title: _.capitalize(req.body.title),
              buyURL: req.body.buyURL,
              // author: author,
              imageUrl: req.body.imageUrl,
              nytBookURI: req.body.bookURI,
              isbn10: req.body.isbn10,
              user: user._id,
        });
        newBook.save()
          .then(result => {
            res.status(200).json({message: 'Success'})
          })
          .catch(err => {
            console.log('err saving new book', err);
            res.status(500).json({ message: 'Saving book failed.' })
          })
      }

    })
    .catch(err => {
      console.log('err looking up book', err);
      res.status(500).json({ message: 'Finding book failed.'})
    })
  
  
};

exports.getCurrentUserBooks = (req, res, next) => {
  const userId = req.params.userId;
  const user = User.findById(userId);
};
