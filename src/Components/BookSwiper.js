import React from "react";
import { Typography } from "@material-ui/core";
import LikeButtons from './LikeButtons';

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
      <LikeButtons book={props.book}/>
    </div>
  );
};

export default BookSwiper;
