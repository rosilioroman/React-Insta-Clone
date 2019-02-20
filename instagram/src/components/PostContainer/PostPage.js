import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostPage = props => {
    return (
        <>
            <SearchBar 
                value={props.value}
                handleChanges={props.handleChanges}
            />
            <PostContainer posts={props.posts}/>
        </>
    );
}

export default PostPage;