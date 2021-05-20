import { UserModel } from "../models/UserModel.js";
import niv from "node-input-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

function encrypt(text) {
  return CryptoJS.HmacSHA256(text, process.env.encrypt_secret_key).toString(
    CryptoJS.enc.Hex
  );
}

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
      if ((await isEmailExit(req.body.email)) == false) {
        const password_hash = encrypt(req.body.password);
        const user = new UserModel({
          username: req.body.username,
          password: password_hash,
          email: req.body.email,
          avatar: req.body.avatar,
        });
        await user.save(function (err) {
          if (err) {
            res.status(500).json({ errors: err });
          } else {
            res.status(200).json({ success: true, data: user });
          }
        });
      } else {
        res
          .status(500)
          .json({ success: false, messages: "Email đã tồn tại !!!" });
      }
    } else {
      res.status(500).json({ errors: v.errors });
    }
  } catch (err) {
    res.status(500).json({ errors: err });
  }
};
async function getUserID(loginquery) {
  try {
    var id = await UserModel.findOne(
      {
        $or: [{ email: loginquery }, { username: loginquery }],
      },
      "_id"
    );
    return id._id;
  } catch (e) {
    console.log(e);
    throw e;
  }
}
async function isEmailExit(email) {
  try {
    const result = await UserModel.findOne({ email: email });
    let kq = false;
    if (result != null) {
      kq = true;
    }
    return kq;
  } catch (err) {
    throw err;
  }
}
async function checkLogin(email, password) {
  const passwordUser = await UserModel.findOne(
    { email: email },
    { password: 1, _id: 0 }
  );
  if (passwordUser != null) {
    if (passwordUser.password == password) {
      return "success";
    } else {
      return { message: "Mật khẩu không chính xác !!" };
    }
  } else if (passwordUser == null) {
    return { message: "Email không tồn tại !!" };
  }
}
export const login = async (req, res) => {
  try {
    const v = new niv.Validator(req.body, {
      password: "required|minLength:8",
      email: "required|email",
    });
    const matched = await v.check();
    if (matched) {
      const password_hash = encrypt(req.body.password);
      const result = await checkLogin(req.body.email, password_hash);
      if (result == "success") {
        const ID = await getUserID(req.body.email);
        const information = await UserModel.findOne({ _id: ID });
        const tokenInformation = {
          _id: ID,
          email: information.email,
          username: information.username,
          avatar: information.avatar,
        };
        jwt.sign(
          tokenInformation,
          process.env.login_secret_key,
          (err, token) => {
            if (err) {
              console.log(err);
            }
            const loginresult = {
              success: true,
              secret_key: token,
            };
            res.status(200).json({ success: true, data: loginresult });
          }
        );
      } else {
        res.status(500).json({ success: false, errors: result });
      }
    } else {
      res.status(500).json({ errors: v.errors });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
