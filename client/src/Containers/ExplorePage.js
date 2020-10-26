import React from 'react';
import ExploreOptionsMenu from '../Components/ExploreOptionsMenu';

export default function ExplorePage() {
    if (!localStorage.currentUserId) {
        window.location.href = '/';
    }

    
}