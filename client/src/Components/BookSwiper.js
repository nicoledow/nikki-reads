import React, { useState } from 'react';
import { Grid } from "@material-ui/core";

import BooksContainer from '../Containers/BooksContainer';
import FinishedSwipingMessage from './FinishedSwipingMessage';

const BookSwiper = props => {
    console.log('book swiper props', props);
    const books = props.books;
    const [currentBook, setCurrentBook] = useState(books[0]);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <a href={currentBook.buy_links[0]}>
                    <h3>{currentBook.title}</h3>
                </a>
                <h6>{currentBook.author}</h6>
                <img src={currentBook.book_image} height={currentBook.book_image_height} width={currentBook.book_image_width}/>
                <p>
                    {currentBook.description}
                </p>
            </Grid>
        </Grid>
    )
};

export default BookSwiper;