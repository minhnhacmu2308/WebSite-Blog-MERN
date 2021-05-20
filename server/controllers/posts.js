import { PostModel } from "../models/PostModel.js";
import niv from "node-input-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createPost = async (req, res) => {
  try {
    const v = new niv.Validator(req.body, {
      secret_key: "required",
      title: "required",
      content: "required",
      attachment:"required"
    });
    const matched = await v.check();
    if(matched){
      jwt.verify(
        req.body.secret_key,
        process.env.login_secret_key,
        async (err,decoded) => {
          if(err){
            res.status(500).json({ error: err });
          }
          if(decoded){
            const data = {
              post_owner_id: decoded._id,
              title: req.body.title,  
              content: req.body.content,
              author: decoded.username,
              attachment: req.body.attachment,
              avatar_owner: decoded.avatar
            }
            const post = new PostModel(data);
            await post.save();

            res.status(200).json(post);
          }
        }
      )
    }else{
      res.status(500).json({ error: v.errors });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await PostModel.findOneAndUpdate(
          { _id: updatePost._id },
          updatePost,
          { new: true }
    );

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const deletePost = async (req, res) => {
  try {
    const deletePost = req.body;
    const post = await PostModel.deleteOne({ _id: deletePost._id });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
