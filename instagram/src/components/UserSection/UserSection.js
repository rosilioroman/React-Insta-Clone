import React from 'react';
import './UserSection.css';

import UserHeader from './UserHeader';
import UserContent from './UserContent';
import UserFooter from './UserFooter';

const UserSection = props => {
    return (
        <aside className="user-section">
            <UserHeader />
            <UserContent title="Stories" action="Watch All"/>
            <UserContent title="Suggestions For You" action="See All"/>
            <UserFooter />
        </aside>
    );
}

export default UserSection;