import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css'

import PostContent from './PostContent';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="post-card">
            <PostContent content={props.post}/>
            <CommentSection comments={props.post.comments}/>
        </div>
    );
}

//type check the 'post' prop being received from PostContainer.js
Post.propTypes = {
    post: PropTypes.shape({
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
    }).isRequired
}

export default Post;