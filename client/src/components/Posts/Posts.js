import React from 'react';
import {useSelector} from 'react-redux';




import Post from './Post/Post';
import useStyles from './styles';

    

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    return(
        //fragment can be <></> pero depen de la versio
        <React.Fragment>
            <h1>Posts</h1>
            <Post />
            <Post />
        </React.Fragment>

    );
}

export default Posts;