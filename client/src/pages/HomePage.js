import React from 'react';
import {Container,Fab} from "@material-ui/core";
import Header from '../components/Header/index.js';
import PostList from '../components/PostList/index.js';
import AddIcon from '@material-ui/icons/Add'
import useStytes from './style';
import {useDispatch} from 'react-redux';
import * as action from '../redux/actions';
import CreatePostModal from '../components/CreatPostModel/index'
export default function HomePage(){
    const classes = useStytes();
    const dispatch = useDispatch();
    const openCreatePostModal = React.useCallback(() => {
        dispatch(action.showModal())
    },[dispatch])
    return(
        <Container maxWidth="lg">
            <Header/>
            <PostList/>
            <CreatePostModal/>
            <Fab color='primary' className={classes.fab} onClick={openCreatePostModal}>
                <AddIcon/>
            </Fab>
        </Container>
    )
}