import { takeLatest ,call,put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api/index.js';

function* fetchPostSaga (action) {
    try{
        const posts = yield call(api.fetchPosts);
        console.log('[post]', posts)
        yield put(actions.getPosts.getPostSuccess(posts.data));
    }catch (err){
        console.log(err)
        yield put(actions.getPosts.getPostError(err));
    }
    
}
function* createPostRequest (action) {
    try{
        const posts = yield call(api.createPost,action.payload);
        console.log('[createPost]-[post]', posts)
        yield put(actions.createPosts.createPostSuccess(posts.data));
    }catch (err){
        console.log(err)
        yield put(actions.createPosts.createPostError(err));
    }
    
}
function* updatePostRequest (action) {
    try{
        const updatedposts = yield call(api.updatePost,action.payload);
        console.log('[updatePost]-[post]', updatedposts)
        yield put(actions.updatePosts.updatePostSuccess(updatedposts.data));
    }catch (err){
        console.error(err);
        yield put(actions.updatePosts.updatePostError(err));
    }
    
}
function* deletePostsRequest(action) {
    try{
        const deletePosts = yield call(api.deletePost,action.payload);
        yield console.log('[deletePost]-[post]',deletePosts.data)
        yield put(actions.deletePosts.deletePostsSuccess(action.payload));
    }catch (err){
        console.error(err);
        yield put(actions.deletePosts.deletePostsError(err));
    }
    
}
//users
function* registerUsersRequest(action) {
    try{
        const registerUsers = yield call(api.registerUser,action.payload);
        yield console.log('[registerUserss]-[user]',registerUsers.data)
        yield put(actions.registerUsers.registerUsersSuccess(registerUsers.data));
    }catch (errors){
        yield put(actions.registerUsers.registerUsersError(errors));
    }
    
}
function* loginUsersRequest(action) {
    try{
        const loginUsers = yield call(api.loginUser,action.payload);
        yield console.log('[login]-[user]',loginUsers.data)
        yield put(actions.loginUsers.loginUsersSuccess(loginUsers.data));
    }catch (errors){
        yield put(actions.loginUsers.loginUsersError(errors));
    }
    
}
function* mySaga() {
    yield takeLatest(actions.getPosts.getPostRequest,fetchPostSaga)
    yield takeLatest(actions.createPosts.createPostRequest,createPostRequest)
    yield takeLatest(actions.updatePosts.updatePostRequest,updatePostRequest)
    yield takeLatest(actions.deletePosts.deletePostsRequest,deletePostsRequest)
    yield takeLatest(actions.registerUsers.registerUsersRequest,registerUsersRequest)
    yield takeLatest(actions.loginUsers.loginUsersRequest,loginUsersRequest)
}

export default mySaga;