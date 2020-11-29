import React, { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Ouroboro } from "react-spinners-css";

import BookSwiper from '../Components/BookSwiper';
import Theme from '../Theme/Theme';

const BooksContainer = (props) => {
  const list = props.list;
  let [books, setBooks] = useState([]);
  let [listCompleted, completeList] = useState(false);

  const fetchNYTBooks = () => {
    const url = `${process.env.REACT_APP_NYT_BOOKS_API_BASE}/lists/current/${list.list_name_encoded}?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const books = data.results.books;
        setBooks(books);
      })
      .catch((err) => {
        alert("We're sorry, your request cannot be processed at this time.");
        console.log("err bookswipercontainer", err);
      });
  };

  useEffect(() => {
    fetchNYTBooks();
  }, []);


  const useStyles = makeStyles({
    btnStyle: {},
  });
  const classes = useStyles();

  if (books.length === 0) {
    return <Ouroboro color={Theme.palette.tertiary.main} size={50} style={{}} className={""} />;
  } else {
    return <BookSwiper books={books} />
  }
 
};

export default BooksContainer;
