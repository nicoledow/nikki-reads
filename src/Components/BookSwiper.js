import React from "react";
import { Typography } from "@material-ui/core";

const BookSwiper = (props) => {
  console.log(props);
  return (
    <div>
      <img
        src={props.book.book_image}
        height={props.book.book_image_height}
        width={props.book.book_image_width}
      />
      <Typography variant="h2">{props.book.title}</Typography>
      {props.book.description}
    </div>
  );
};

export default BookSwiper;
