import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

import CommentsContainer from './CommentsContainer';
import LikesContainer from './LikesContainer';

const CommentSection = props => {
    return (
        <div className="comment-section">
            <LikesContainer likes={props.likes}/>
            <CommentsContainer 
                comments={props.comments} 
                timestamp={props.timestamp}
            />
        </div>
    );
}

//type check the props received from Post.js
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    ).isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired
}

export default CommentSection;