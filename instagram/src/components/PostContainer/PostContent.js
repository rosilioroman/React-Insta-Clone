import React from 'react';
import './PostContainer.css';

import PostHeader from './PostHeader';

const PostContent = props => {
    return (
        <>
            <PostHeader 
                thumbnail={props.content.thumbnailUrl}
                username={props.content.username}
            />
            <img 
                src={props.content.imageUrl}
                alt={`Post from ${props.content.username}`}
                className="post-img"
            />
        </>
    );
}

export default PostContent;