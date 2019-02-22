import React from 'react';
import './UserSection.css';

const UserContent = props => {
    return (
        <div className="user-content">
            <h4>{props.title}</h4>
            <h5>{props.action}</h5>
        </div>
    );
}

export default UserContent;