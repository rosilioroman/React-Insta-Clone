import React from 'react';
import './UserSection.css';
import DefaultUser from '../../images/default-user-img.jpg';

const UserHeader = props => {
    return (
        <div className="user-header">
            <div className="user-img-container">
                <img
                    src={DefaultUser}
                    alt="Default user icon"
                    className="user-img"
                />
            </div>
            <h4 className="username">{localStorage.getItem('username')}</h4>
        </div>
    );
}

export default UserHeader;