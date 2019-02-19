import React from 'react';

const CommentInputForm = props => {
    return (
        <form className="comment-input-form">
            <input 
                type="text"
                placeholder="Add a comment..."
                className="comment-input-field"
            />
        </form>
    );
}

export default CommentInputForm;