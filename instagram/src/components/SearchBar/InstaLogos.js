import React from 'react';
import './SearchBar.css';
import camera from '../../images/camera-logo.svg';
import instaName from '../../images/instagram-name-logo.jpg'

const InstaLogos = props => {
    return (
        <div className="nav-section logos-section">
            <div className="logos-container">
                <div className="camera-logo">
                    <img 
                        src={camera}
                        alt="Instagram camera logo"
                        className="camera-img"
                    />
                </div>
                <div className="name-logo">
                    <img 
                        src={instaName}
                        alt="Instagram name logo"
                        className="insta-img"
                    />
                </div>
            </div>
        </div>
    );
}

export default InstaLogos;