import React, { useState } from "react";
import BookListGrid from "./BookListGrid";

const nytBaseUrl = process.env.REACT_APP_NYT_BOOKS_API_BASE;

const ExploreOptionsMenu = () => {
  const [lists, setLists] = useState([]);
  const [listsShouldDisplay, showOrHideLists] = useState(false);

  const fetchNYTLists = () => {
    const url = `${nytBaseUrl}/lists/names.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const lists = data.results;
        setLists(lists);
        showOrHideLists(true);
      })
      .catch((err) => console.log("err", err));
  };

  const openNYTLists = event => {
    event.target.parentElement.removeChild(event.target);
    fetchNYTLists();
  };

  return (
    <div>
      <button onClick={e => openNYTLists(e)}>New York Times Lists</button>
      {listsShouldDisplay && lists.length > 0 ? (
        <BookListGrid lists={lists} />
      ) : (
        <div />
      )}
    </div>
  );
};

export default ExploreOptionsMenu;
