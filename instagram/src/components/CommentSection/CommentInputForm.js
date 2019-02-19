import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentInputForm = props => {
    return (
        <form className="comment-input-form" onSubmit={props.addComment}>
            <input 
                type="text"
                placeholder="Add a comment..."
                className="comment-input-field"
                onChange={props.handleChanges}
                name="newComment"
                value={props.value}
            />
        </form>
    );
}

//type check props received from CommentsContainer.js
CommentInputForm.propTypes = {
    handleChanges: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired
}

export default CommentInputForm;