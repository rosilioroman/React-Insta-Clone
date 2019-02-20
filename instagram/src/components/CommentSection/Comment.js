import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => {
    return (
        <div className="comment">
            <div className="username">
                {props.comment.username}
            </div>
            <div className="comment-text">
                {props.comment.text}
            </div>
        </div>
    );
}

//type check the comment object received from CommentsContainer.js
Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment;