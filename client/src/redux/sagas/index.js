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
function* mySaga() {
    yield takeLatest(actions.getPosts.getPostRequest,fetchPostSaga)
    yield takeLatest(actions.createPosts.createPostRequest,createPostRequest)
    yield takeLatest(actions.updatePosts.updatePostRequest,updatePostRequest)
    yield takeLatest(actions.deletePosts.deletePostsRequest,deletePostsRequest)
}

export default mySaga;