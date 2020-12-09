import React, { useState, useEffect } from "react";
import BookListGrid from "./BookListGrid";
import { Ouroboro } from "react-spinners-css";
import Theme from "../Theme/Theme";

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
        console.log("data from fetch", data);
        const lists = data.results;
        setTimeout(() => {
          setLists(lists);
          displayLists(true);
        }, 2000);
      })
      .catch((err) => console.log("err", err));
  };

  if (listsShouldDisplay) {
    return <BookListGrid lists={lists} />;
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <Ouroboro
          color={Theme.palette.tertiary.main}
          size={50}
          style={{}}
          className={""}
        />
      </div>
    );
  }
};

export default NYTListsMenu;
