import React, { useEffect } from "react";
import { useState } from "react";
import { Typography, makeStyles, Button, Grid, Container } from "@material-ui/core";
import FinishedSwipingMessage from './FinishedSwipingMessage';

const BookSwiper = (props) => {
  const list = props.list;
  let [books, setBooks] = useState([]);
  let [currentBook, setCurrentBook] = useState(null);

  const fetchNYTBooks = () => {
    const url = `${process.env.REACT_APP_NYT_BOOKS_API_BASE}/lists/current/${list.list_name_encoded}?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const books = data.results.books;
        setBooks((prevBooks) => {
          return books;
        });
        setCurrentBook((prevBook) => {
          return books[0];
        });
      })
      .catch((err) => {
        alert("We're sorry, your request cannot be processed at this time.");
        console.log("err bookswipercontainer", err);
      });
  };

  useEffect(() => {
    fetchNYTBooks();
  }, []);

  const getNextBook = () => {
    const currentBookIndex = books.indexOf(currentBook);
    setCurrentBook((prevBook) => {
      const nextBook = books[currentBookIndex + 1];
      if (nextBook) {
        return nextBook;
      } else {
        return null;
      }
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
        })
        .catch((err) => console.log("error", err));
    }

    getNextBook();
  };

  const useStyles = makeStyles({
    btnStyle: {},
  });
  const classes = useStyles();

  if (currentBook) {
    return (
      <div style={{color: '#fff'}}>Current book</div>
    );
  } else {
    return <FinishedSwipingMessage />
  }
};

export default BookSwiper;
