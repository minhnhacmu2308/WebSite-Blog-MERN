import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
    },
    password: {
        type: String, 
        required: true, 
    },
    avatar: String,
    email: {
        type :String, 
        required: true, 
    }
},{timestamps:true});
export const UserModel = mongoose.model("User", schema)