import React, { useState, useEffect } from "react";
import BookListGrid from "./BookListGrid";

const nytBaseUrl = process.env.REACT_APP_NYT_BOOKS_API_BASE;

const NYTListsMenu = () => {
  const [lists, setLists] = useState([]);
  const [listsShouldDisplay, displayLists] = useState(false);

  useEffect(() => {
    fetchNYTLists();
  }, []);

  const fetchNYTLists = () => {
    const url = `${nytBaseUrl}/lists/names.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log('data from fetch', data);
        const lists = data.results;
        setLists(lists);
        displayLists(true);
      })
      .catch((err) => console.log("err", err));
  };

  if (listsShouldDisplay) {
    return (
      <BookListGrid lists={lists}/>
    )
  } else {
    return(
      <div>Loading animation</div>
    )
  }
  
};

export default NYTListsMenu;
