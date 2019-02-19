import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import WhiteHeart from '../../images/white-heart.svg'

const LikesContainer = props => {
    return (
        <>
            <div className="heart-container">
                <img 
                    src={WhiteHeart}
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

//type check the likes prop received from CommentSection.js
LikesContainer.propTypes = {
    likes: PropTypes.number.isRequired
}

export default LikesContainer;