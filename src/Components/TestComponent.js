import React, { useState, useEffect } from 'react';

const TestComponent = () => {
    const books = ['Outlander', 'The Age of Witches', 'The End of the Ocean', 'Dragonfly in Amber', 'Harry Potter', 'Twilight', 'Absalom Absalom', 'Memoirs and Misinformations', 'Voyager', 'Homegoing'];

    const [currentBook, selectBook] = useState('Outlander');

    function newBook() {
        const newBookIndex = Math.floor(Math.random() * 10);
        const newBook = books[newBookIndex];
        selectBook(newBook);
    }

    function fetchBooks() {
        console.log('fetch books');
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <h1>{currentBook}</h1>
            <button onClick={newBook}>New book</button>
        </div>
    )
}

export default TestComponent;