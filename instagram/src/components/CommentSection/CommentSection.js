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
            newComment: "",
            isLiked: false,
            currentLikes: this.props.likes
        }
    }

    componentDidMount() {
        this.setState({ comments: this.props.comments })
    }

    //generic onChange event handler
    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //onSubmit event handler for adding a new comment
    addComment = e => {
        e.preventDefault();

        const newCommentObj = {
            username: localStorage.getItem('username'),
            text: this.state.newComment
        }

        const prevComments = this.state.comments;
        prevComments.push(newCommentObj);

        this.setState({
            comments: prevComments,
            newComment: ""
        })
    }

    //onClick event handler for controlling likes
    likePost = () => {
        let newLikes = this.state.currentLikes;
        if(this.state.isLiked) {
            newLikes--;
            this.setState({
                isLiked: false,
                currentLikes: newLikes
            })
        } else {
            newLikes++;
            this.setState({ 
                isLiked: true,
                currentLikes: newLikes
            })
        }
    }

    render() {
        return (
            <div className="comment-section">
                <LikesContainer
                    likes={this.state.currentLikes}
                    likePost={this.likePost}
                    isLiked={this.state.isLiked}
                />
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