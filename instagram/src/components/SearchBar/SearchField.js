import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchField = props => {
    return (
        <form className="nav-section">
            <input 
                type="search"
                placeholder="Search"
                className="search-field"
                name="searchText"
                value={props.value}
                onChange={props.handleChanges}
            />
        </form>
    );
}

SearchField.propTypes = {
    value: PropTypes.string.isRequired,
    handleChanges: PropTypes.func.isRequired
}

export default SearchField;