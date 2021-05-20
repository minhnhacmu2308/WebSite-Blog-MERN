import React from 'react';
import {Avatar, Card , CardActions, CardContent, CardHeader, CardMedia , IconButton,Typography} from '@material-ui/core';
import MoreVertIcon  from '@material-ui/icons/MoreVert';
import FavoriteIcon  from '@material-ui/icons/Favorite';
import Skeleton from '@material-ui/lab/Skeleton';
import moment from 'moment';
import useStyles from './style';
import {useDispatch } from 'react-redux';
import {updatePosts,deletePosts} from '../../../redux/actions'
export default function Post({post}){
    const classes = useStyles();
    const dispatch = useDispatch();
    const onLikeButtonClick = React.useCallback(() => {
        dispatch(updatePosts.updatePostRequest({...post, likeCount: post.likeCount+1}));
      },[post,dispatch]);
    const onDeleteClick = React.useCallback(() => {
        dispatch(deletePosts.deletePostsRequest({...post}));
    },[post,dispatch])
    return(
       <Card>
           <CardHeader
           avatar={<Avatar src = {post.avatar_owner?post.avatar_owner:"s"}/>}
           title ={post.author}
           subheader ={moment(post.updateAt).format('HH:MM:SS MM DD,YYYY')}
           action={
               <IconButton onClick={onDeleteClick}>
                   <MoreVertIcon/>
               </IconButton>
           }
          />
        <CardMedia image={post.attachment || ''} title="Title"  className={classes.media}/>
        <CardContent>
            <Typography variant='h5' color='textPrimary'>
                {post.title}
            </Typography>
            <Typography variant='body2' component="p" color='textSecondary'>
                {post.content}
            </Typography>
           
        </CardContent>
        <CardActions>
            <IconButton onClick={onLikeButtonClick}>
                <FavoriteIcon/>
                <Typography component="span" color='textSecondary'> {`${post.likeCount} likes`}</Typography>
            </IconButton>
        </CardActions>
       </Card>
    )
}