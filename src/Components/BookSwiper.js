import React from 'react';

const BookSwiper = props => {
    console.log(props);
    return(
        <div>
            {props.book.title}
        </div>
    )
};

export default BookSwiper;