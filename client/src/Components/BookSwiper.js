import React from "react";
import { useState } from "react";
import { Typography, Container, makeStyles, Button } from "@material-ui/core";

const BookSwiper = (props) => {
  console.log('bookswiper props', props);
  const books = props.books;
  let [currentBook, nextBook] = useState(books[0]);
  console.log("currentbook", currentBook);

  const updateCurrentBook = () => {
    nextBook((currentBook) => {
      const nextBookIndex = books.indexOf(currentBook) + 1;
      return books[nextBookIndex];
    });
  };

  const likeBook = (likesBook) => {
    const book = currentBook;
    if (likesBook) {
      const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/books`;
      const bookData = {
        buyURL: book.amazon_product_url,
        author: book.author,
        imageUrl: book.book_image,
        bookURI: book.book_uri,
        title: book.title,
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(bookData),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log("data", data);
          updateCurrentBook();
        })
        .catch((err) => console.log("error", err));
    }
  };

  const useStyles = makeStyles({
    btnStyle: {},
  });
  const classes = useStyles();

  return (
    <div>
      <img
        src={currentBook.book_image}
        height={currentBook.book_image_height}
        width={currentBook.book_image_width}
      />
      <Typography variant="h2">{currentBook.title}</Typography>
      {currentBook.description}
      <Container>
        <Button color="primary" size="medium" variant="outlined" onClick={() => likeBook(false)} className={classes.btnStyle}>
          Dislike
        </Button>
        <Button color="primary" size="medium" variant="outlined" onClick={() => likeBook(true)} className={classes.btnStyle}>
          Like
        </Button>
      </Container>
    </div>
  );
};

export default BookSwiper;
