import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BookSwiper from '../Components/BookSwiper';

const nytBaseUrl = process.env.REACT_APP_NYT_BOOKS_API_BASE;

const ListDisplayContainer = props => {
  let [books, getBooks] = useState([]);
  let [currentBookIdx, updateCurrentBookIdx] = useState(0);
  
  const fetchBooksForList = () => {
    const listName = window.location.href.split('/').pop();

    //TODO: hide in backend so key isn't visible
    fetch(nytBaseUrl + `/lists/current/${listName}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`)
    .then(resp => resp.json())
    .then(data => {
      console.log('data', data);
      getBooks(data.results.books);
      console.log('books', books);
    })
    .catch(err => {
      console.log('err', err);
      alert('We\'re sorry, your request cannot be processed at this time. Please try again later.');
    })
  }

  useEffect(() => {
    fetchBooksForList();
  }, []);

  return (
    <div>
      { 
      books.length > 0 ?
      <BookSwiper book={books[currentBookIdx]} />
      :
      <div/>
    }
    </div>
  )
};

export default ListDisplayContainer;
