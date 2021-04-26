import {createActions,createAction} from 'redux-actions';

export const getType = (reduxAction) =>{
    return reduxAction().type;
}
//posts
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
export const deletePosts = createActions({
    deletePostsRequest: (payload) => payload,
    deletePostsSuccess: (payload) => payload,
    deletePostsError: (err) => err,
})
//users

//modal
export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');