import React from 'react';
import './SearchBar.css';
import icons from '../../images/user-icons.png';

const UserIcons = props => {
    return (
        <div className="nav-section icons-section">
            <img
                src={ icons }
                alt="User icons"
                className="icons-img"
            />
        </div>
    );
}

export default UserIcons;