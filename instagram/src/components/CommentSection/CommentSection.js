import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

import CommentsContainer from './CommentsContainer';
import LikesContainer from './LikesContainer';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newComment: ""
        }
    }

    componentDidMount() {
        this.setState({ comments: this.props.comments })
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addComment = e => {
        e.preventDefault();

        const newCommentObj = {
            username: 'TestUser',
            text: this.state.newComment
        }

        const prevComments = this.state.comments;
        prevComments.push(newCommentObj);

        this.setState({
            comments: prevComments,
            newComment: ""
        })
    }

    render() {
        return (
            <div className="comment-section">
                <LikesContainer likes={this.props.likes}/>
                <CommentsContainer 
                    comments={this.state.comments} 
                    timestamp={this.props.timestamp}
                    handleChanges={this.handleChanges}
                    value={this.state.newComment}
                    addComment={this.addComment}
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