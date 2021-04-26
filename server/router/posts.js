import express from 'express';
import {getPosts,createPost,updatePost,deletePost} from '../controllers/posts.js';
import { register} from '../controllers/users.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/update', updatePost);
router.post('/delete', deletePost);
router.post('/register', register);
export default router;