import React, { useState } from 'react';
    
const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const nytBaseUrl = process.env.REACT_APP_NYT_BOOKS_API_BASE;

const ExploreOptionsMenu = () => {
    let lists;
    const [currentList, chooseList] = useState(null);

    const fetchNYTLists = () => {
        const url = `${nytBaseUrl}/lists/names.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            lists = data.results;
            chooseList(lists[0]);
        })
        .catch(err => console.log('err', err));
    }

    const openNYTLists = () => {
        console.log('open nyt lists');
        const lists = fetchNYTLists();
    };

    return(
        <div>
            Explore options menu:
            <button onClick={openNYTLists}>New York Times Lists</button>
        </div>
    )
};

export default ExploreOptionsMenu;