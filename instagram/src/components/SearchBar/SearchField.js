import React from 'react';
import './SearchBar.css';

const SearchField = props => {
    return (
        <div className="nav-section">
            <input 
                type="search"
                placeholder="Search"
                className="search-field"
            />
        </div>
    );
}

export default SearchField;