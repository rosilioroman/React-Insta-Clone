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
            <CommentInputForm />
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
    timestamp: PropTypes.string.isRequired
}

export default CommentsContainer;