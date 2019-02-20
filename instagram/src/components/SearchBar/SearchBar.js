import React from 'react';
import './SearchBar.css';

import InstaLogos from './InstaLogos';
import SearchField from './SearchField';
import UserIcons from './UserIcons';

const SearchBar = props => {
    return (
        <header className="app-header">
            <nav className="main-nav">
                <InstaLogos />
                <SearchField />
                <UserIcons />
            </nav>
        </header>
    );
}

export default SearchBar;