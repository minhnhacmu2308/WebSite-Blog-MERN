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
export const registerUsers = createActions({
    registerUsersRequest: (payload) => payload,
    registerUsersSuccess: (payload) => payload,
    registerUsersError: (err) => err,
})
export const loginUsers = createActions({
    loginUsersRequest: (payload) => payload,
    loginUsersSuccess: (payload) => payload,
    loginUsersError: (err) => err,
})
export const logoutUsers = createActions({
    logoutUsersRequest: undefined,
    logoutUsersSuccess: (payload) => payload,
    logoutUsersError: (err) => err,
})
//modal
export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');
export const showModalRegister = createAction('SHOW_REGISTER_USER_MODAL');
export const hideModalRegister = createAction('HIDE_REGISTER_USER_MODAL');
export const showModalLogin = createAction('SHOW_LOGIN_USER_MODAL');
export const hideModalLogin = createAction('HIDE_LOGIN_USER_MODAL');
export const hideNotice = createAction('HIDE_NOTICE');