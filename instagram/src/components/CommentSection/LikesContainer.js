import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import WhiteHeart from '../../images/white-heart.svg'
import RedHeart from '../../images/red-heart.svg';

const LikesContainer = props => {
    return (
        <>
            <div className="heart-container" onClick={props.likePost}>
                <img 
                    src={props.isLiked? RedHeart : WhiteHeart}
                    alt="Heart icon"
                    className="heart-img"
                />
            </div>
            <div className="likes-num">
                {props.likes} likes
            </div>
        </>
    );
}

//type check props received from CommentSection.js
LikesContainer.propTypes = {
    likes: PropTypes.number.isRequired,
    likePost: PropTypes.func.isRequired,
    isLiked: PropTypes.bool.isRequired
}

export default LikesContainer;