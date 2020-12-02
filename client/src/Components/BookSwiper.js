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
    const bookInfo = {
      title: currentBook.title,
      buyURL: currentBook.buy_links[0].url,
      author: currentBook.author,
      imageUrl: currentBook.book_image,
      isbn10: currentBook.isbns[0].isbn10,
      nytBookURI: currentBook.book_uri,
      user: {
        id: localStorage.userId
      }
    };

    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/likedBooks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookInfo)
    })
    .then(resp => {
      console.log('in resp step');
      return resp.json();
    })
    .then(result => {
      console.log('in result step');
      console.log(result);
    })
    .catch(err => {
      console.log('err', err);
      alert("We\'re sorry, an error occurred. Please try again later.");
    })
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
