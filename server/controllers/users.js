
import { UserModel } from "../models/UserModel.js";
import niv from "node-input-validator";
import bcrypt from "bcrypt";


export const register = async (req, res) => {
  try {
    const v = new niv.Validator(req.body, {
      username: "required|maxLength:50",
      password: "required|minLength:8",
      email: "required|email",
      avatar: "required",
    });
    const matched = await v.check();
    if (matched) {
      const password_hash = bcrypt.hashSync(req.body.password, 8);
      const user = new UserModel({
        username: req.body.username,
        password:password_hash,
        email: req.body.email,
        avatar:req.body.avatar,
      });
      await user.save(function (err) {
        if (err) {
          res.status(500).json({ errors: err });
        } else {
          res.status(200).json(user);
        }
      });
    } else {
      res.status(500).json({ errors: v.errors });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
