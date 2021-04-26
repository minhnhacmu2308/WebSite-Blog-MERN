import React from 'react';
import {Grid} from "@material-ui/core";
import Post from './Post/index.js'
import {useDispatch,useSelector} from 'react-redux';
import * as action from '../../redux/actions';
import {postsState$} from '../../redux/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function PostList(){
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);
    console.log('[PostList]- posts' ,posts)
    React.useEffect(() => {
         dispatch(action.getPosts.getPostRequest())
    },[dispatch])
    return <Grid container spacing={2}  alignItems="center" justify="center">
        {posts.length === 0 ? 
            <CircularProgress />
        :
        posts.map((post) => (
            <Grid  key={post._id} item xs={12} sm={6}>
              <Post post={post}/>
           </Grid>
        ))}
    </Grid>;
}