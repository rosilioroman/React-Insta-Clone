import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

import InstaLogos from './InstaLogos';
import SearchField from './SearchField';
import UserIcons from './UserIcons';

const SearchBar = props => {
    return (
        <header className="app-header">
            <nav className="main-nav">
                <InstaLogos />
                <SearchField value={props.value} handleChanges={props.handleChanges}/>
                <UserIcons />
            </nav>
        </header>
    );
}

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    handleChanges: PropTypes.func.isRequired
}

export default SearchBar;