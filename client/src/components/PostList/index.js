import React from 'react';
import {Grid} from "@material-ui/core";
import Post from './Post/index.js'
import {useDispatch,useSelector} from 'react-redux';
import * as action from '../../redux/actions';
import {postsState$} from '../../redux/selectors'

export default function PostList(){
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);
    console.log('[PostList]- posts' ,posts)
    React.useEffect(() => {
         dispatch(action.getPosts.getPostRequest())
    },[dispatch])
    return <Grid container spacing={2} alignItems="stretch">
        {posts.map((post) => (
            <Grid  key={post._id} item xs={12} sm={6}>
              <Post post={post}/>
           </Grid>
        ))}
    </Grid>;
}