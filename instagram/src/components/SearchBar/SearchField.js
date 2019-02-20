import React from 'react';
import './SearchBar.css';

const SearchField = props => {
    return (
        <form className="nav-section">
            <input 
                type="search"
                placeholder="Search"
                className="search-field"
            />
        </form>
    );
}

export default SearchField;