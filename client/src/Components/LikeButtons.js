import React from 'react';
import { Container, Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LikeButtons = props => {
    const book = props.book;

    const likeBook = likesBook => {
        console.log('was clicked');
        console.log('props', props);
        if (likesBook) {
            const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/books`;
            console.log('url', url);
            const bookData = {
                buyURL: book.amazon_product_url,
                author: book.author,
                imageUrl: book.book_image,
                bookURI: book.book_uri
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

            <Button color="primary" size="medium" variant="outlined" onClick={() => likeBook(false)}>
                Dislike
            </Button>
            <Button color="primary" size="medium" variant="outlined" onClick={() => likeBook(true)}>Like</Button>
        </Container>
    )
};

export default LikeButtons;