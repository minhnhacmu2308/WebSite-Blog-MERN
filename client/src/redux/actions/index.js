import {createActions,createAction} from 'redux-actions';

export const getType = (reduxAction) =>{
    return reduxAction().type;
}

export const getPosts = createActions({
    getPostRequest: undefined,
    getPostSuccess: (payload) => payload,
    getPostError: (err) => err,
})
export const createPosts = createActions({
    createPostRequest: (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostError: (err) => err,
})
export const updatePosts = createActions({
    updatePostRequest: (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostError: (err) => err,
})
export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');