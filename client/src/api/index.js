import axios from 'axios';


const URL = "http://localhost:5000";
//posts
export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) =>axios.post(`${URL}/posts/update`, payload);
export const deletePost = (payload) =>axios.post(`${URL}/posts/delete`, payload);
//users
export const registerUser = (payload) =>axios.post(`${URL}/users/register`,payload);
export const loginUser = (payload) =>axios.post(`${URL}/users/login`, payload);
