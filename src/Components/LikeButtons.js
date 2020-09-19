import React from 'react';
import { Container, Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LikeButtons = props => {

    const likeBook = likesBook => {
        console.log(likesBook);
        //if (likesBook) {
            //fetch req to back end to save this book
        //}
    };

    return (
        <Container>

            <Button color="primary" size="medium" variant="outlined" onClick={likeBook(false)}>
                Dislike
            </Button>
            <Button color="primary" size="medium" variant="outlined" onClick={likeBook(true)}>Like</Button>
        </Container>
    )
};

export default LikeButtons;