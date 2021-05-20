import {combineReducers} from "redux";
import posts from './posts.js'
import modal from './modal.js'
import users from './users.js';

export default combineReducers({
    posts,
    modal,
    users,
})