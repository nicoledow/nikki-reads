import React from 'react';
import { Container, Button, makeStyles } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Theme from '../Theme/Theme';


const LikeButtons = props => {
    const useStyles = makeStyles({
        btnStyle: {

        }
      });
    const classes = useStyles();

    const book = props.book;

    const likeBook = likesBook => {
        if (likesBook) {
            const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/books`;
            const bookData = {
                buyURL: book.amazon_product_url,
                author: book.author,
                imageUrl: book.book_image,
                bookURI: book.book_uri,
                title: book.title
            };

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(bookData)
            })
            .then(resp => resp.json())
            .then(data => console.log('data', data))
            .catch(err => console.log('error', err));
        }
    };

    return (
        <Container>
            <Button color="primary" size="medium" variant="outlined" onClick={() => likeBook(false)} className={classes.btnStyle}>
                Dislike
            </Button>
            <Button color="primary" size="medium" variant="outlined" onClick={() => likeBook(true)}>Like</Button>
        </Container>
    )
};

export default LikeButtons;