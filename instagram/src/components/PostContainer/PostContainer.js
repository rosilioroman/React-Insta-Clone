import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';

import Post from './Post';
import UserSection from '../UserSection/UserSection';

const PostContainer = props => {
    return (
        <div className="content-container">
            <div className="post-container">
                {props.posts.map(p => <Post key={p.imageUrl} post={p}/>)}
            </div>
            <UserSection />
        </div>
    );
}

//type check the prop being received from App.js
PostContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            )
        })
    ).isRequired
}

export default PostContainer;