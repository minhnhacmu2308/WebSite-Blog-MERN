import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String, 
        required: true, 
    },
    content: {
        type: String, 
        required: true, 
    },
    post_owner_id:{
        type: String,
        index : true
    },
    author: {
        type: String, 
        required: true, 
        default: 'Minh Nha', 
    },
    attachment: String,
    likeCount: {
        type: Number, 
        default: 0, 
    },
    avatar_owner: String

},{timestamps:true});
export const PostModel = mongoose.model("Post", schema)