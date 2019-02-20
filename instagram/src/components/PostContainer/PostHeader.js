import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="user-img-container">
                <img 
                    src={props.thumbnail}
                    alt="user thumbnail"
                    className="user-img"
                />
            </div>
            <h4 className="username">{props.username}</h4>
        </div>
    );
}

PostHeader.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

export default PostHeader;