import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

import Comment from './Comment';
import CommentInputForm from './CommentInputForm';
import TimeStamp from './TimeStamp';

const CommentsContainer = props => {
    return (
        <>
            {props.comments.map((c, index) => <Comment key={index} comment={c}/>)}
            <TimeStamp timestamp={props.timestamp}/>
            <CommentInputForm 
                handleChanges={props.handleChanges} 
                value={props.value}
                addComment={props.addComment}
            />
        </>
    );
}

//type check the props being received from CommentSection.js
CommentsContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    ).isRequired,
    timestamp: PropTypes.string.isRequired,
    handleChanges: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired
}

export default CommentsContainer;