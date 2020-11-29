import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";

import BooksContainer from "../Containers/BooksContainer";
import FinishedSwipingMessage from "./FinishedSwipingMessage";

const BookSwiper = (props) => {
  console.log("book swiper props", props);
  const books = props.books;
  const [currentBookIdx, updateBookIdx] = useState(0);
  const [currentBook, setCurrentBook] = useState(books[0]);

  const likeBook = () => {
    console.log("like book");
    getNextBook();
  };

  const skipBook = () => {
    console.log("skip book");
    getNextBook();
  };

  const getNextBook = () => {
    if (books.length > currentBookIdx + 2) {
      updateBookIdx((prevBookIdx) => {
        setCurrentBook(books[currentBookIdx + 1]);
        return prevBookIdx + 1;
      });
    } else {
        setCurrentBook(null);
    }
  };

  if (!currentBook) {
      return <FinishedSwipingMessage />
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <a href={currentBook.buy_links[0]}>
          <h3>{currentBook.title}</h3>
        </a>
        <h6>{currentBook.author}</h6>
        <img
          src={currentBook.book_image}
          height={currentBook.book_image_height}
          width={currentBook.book_image_width}
        />
        <p>{currentBook.description}</p>
        <Button onClick={skipBook}>Dislike</Button>
        <Button onClick={likeBook}>Like</Button>
      </Grid>
    </Grid>
  );
};

export default BookSwiper;
