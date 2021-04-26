import React from 'react';
import {Avatar, Card , CardActions, CardContent, CardHeader, CardMedia , IconButton,Typography} from '@material-ui/core';
import MoreVertIcon  from '@material-ui/icons/MoreVert';
import FavoriteIcon  from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from './style';
import {useDispatch } from 'react-redux';
import {updatePosts} from '../../../redux/actions'
export default function Post({post}){
    const classes = useStyles();
    const dispatch = useDispatch();
    const onLikeButtonClick = React.useCallback(() => {
        dispatch(updatePosts.updatePostRequest({...post, likeCount: post.likeCount+1}));
      },[post,dispatch]);
    return(
       <Card>
           <CardHeader
           avatar={<Avatar>A</Avatar>}
           title ={post.author}
           subheader ={moment(post.updateAt).format('HH:MM MM DD,YYYY')}
           action={
               <IconButton>
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