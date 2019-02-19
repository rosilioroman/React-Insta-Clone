import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

import CommentsContainer from './CommentsContainer';
import LikesContainer from './LikesContainer';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: ""
        }
    }

    render() {
        return (
            <div className="comment-section">
                <LikesContainer likes={this.props.likes}/>
                <CommentsContainer 
                    comments={this.props.comments} 
                    timestamp={this.props.timestamp}
                />
            </div>
        );
    }
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