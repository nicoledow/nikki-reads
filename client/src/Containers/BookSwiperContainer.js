import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BookSwiper from '../Components/BookSwiper';

const nytBaseUrl = process.env.REACT_APP_NYT_BOOKS_API_BASE;

const BookSwiperContainer = props => {
  let [books, setBooks] = useState(null);

  const setBooksForSwiping = books => {
    setBooks(prevBooks => books);
  };


  const fetchNYTBooks = () => {
    const listSlug = window.location.href.split('/').pop();
    fetch(`${nytBaseUrl}/lists/current/${listSlug}?api-key=${process.env.REACT_APP_NYT_API_KEY}`)
    .then(resp => resp.json())
    .then(data => {
      const books = data.results.books;
      setBooksForSwiping(books);
    })
    .catch(err => {
      alert('We\'re sorry, your request cannot be processed at this time.');
      console.log('err bookswipercontainer', err);
    })
  };

  useEffect(() => {
    fetchNYTBooks();
  }, []);

  return (
    <div>
      {
        books && books.length > 0 ? <BookSwiper books={books}/> : <div/>
      }
    </div>
  )
};

export default BookSwiperContainer;
