import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import { response } from "express";
import jwt from "jsonwebtoken";

// Find user by ID
export const byId = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await Users.findById(userId)
      : await Users.findOne({ username: username });
    // NOT sending password or role
    const { password, role, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    return res.status(404).json({message: "this user does not exist!" });
  }
};

// Update User
export const updateUser = async (req, res) => {
 // const userId = req.body.userId;
  const userId = req.userId;
  // console.log(userId);
  const id = req.params.id;
  // console.log(id);
  const username = req.body.username;
  // console.log(username);
  // const email = req.body.email;
  // console.log(email);
  // const role = req.body.role;
  // console.log(role);
  const password = req.body.password;
  // console.log(password);
  const avatarURL = req.body.avatarURL;
  const city = req.body.city;
  // console.log(city);
  const from = req.body.from;
  // console.log(from);
  const birthday = req.body.birthday;
  // console.log(birthday);
  const desc = req.body.desc;
  // console.log(desc);
  // console.log(req.body);

  // if (userId === id || role == "Admin") {
    if (userId === id || role === "User") {
    if (password) {
      try {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
      } catch (err) {
        return res.status(500).json("Password error");
      }
    }
    try {
      const user = await Users.findByIdAndUpdate(id, {
        $set: req.body,
      });
     // console.log(user);
      res.status(200).json({ message: "User has been updated!" });
    } catch (err) {
      return res.status(500).json("User update error");
    }
  } else {
    return res
      .status(403)
      .json({ message: "you can only update your own account!" });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  const userId = req.userId;
  const id = req.params.id;
  // const role = req.body.role;

  if (userId === id) {
    try {
      const user = await Users.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: "Your account has been deleted successfully" });
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json({ message: "you can only delete your own account!" });
  }
};

// Follow a User
/*
export const followUser = async (req, res) => {
    // first check if the users are the same
  if (req.body.userId !== req.params.id) {
    try{
        // user is the person you are looking up ---> current user is YOU (person trying to make the request)
        const user = await Users.findById(req.params.id);
        const currentUser = await Users.findById(req.body.userId);
         // if the user does not already follow the user, we will update them here
        if(!user.followers.includes(req.body.userId)){
            // OUR user only has friendships ---> so replace followers but no followings
            await user.updateOne({ $push: {followers: req.body.userId}});
            await currentUser.updateOne({ $push: {followings: req.params.id}});
            res.status(200).json({ message: "you are now following this user!" });
        } else{
            res.status(403).json("you already follow this user")
        }
    }catch(err){
        res.status(500).json(err)
    }
  } else {
    res.status(403).json({ message: "you cannot follow yourself!" });
  }
};
*/

// unFollow a User
/*
export const unfollowUser = async (req, res) => {
    // first check if the users are the same
  if (req.body.userId !== req.params.id) {
    try{
        // user is the person you are looking up ---> current user is YOU (person trying to make the request)
        const user = await Users.findById(req.params.id);
        const currentUser = await Users.findById(req.body.userId);
         // if the user does follow the user, we will update their freidnship here
        if(user.followers.includes(req.body.userId)){
            // OUR user only has friendships ---> so replace followers but no followings
            await user.updateOne({ $pull: {followers: req.body.userId}});
            await currentUser.updateOne({ $pull: {followings: req.params.id}});
            res.status(200).json({ message: "you have successfully unfollowed the user" });
        } else{
            res.status(403).json("you don't follow this user")
        }
    }catch(err){
        res.status(500).json(err)
    }
  } else {
    res.status(403).json({ message: "you cannot unfollow yourself!" });
  }
};
*/
