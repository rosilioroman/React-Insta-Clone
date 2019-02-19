import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'

const TimeStamp = props => {
    return <div className="timestamp">{props.timestamp}</div>
}

//type check the string being received from CommentsContainer.js
TimeStamp.propTypes = {
    timestamp: PropTypes.string.isRequired
}

export default TimeStamp;