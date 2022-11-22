import Post from "../models/Posts.js";
import User from "../models/Users.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Create post
export const createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const user = await User.findById(req.userId);
    console.log(req.userId);
    //  console.log(user);

    if (req.files) {
      let fileName = Date.now().toString() + req.files.image.name;
      const __dirname = dirname(fileURLToPath(import.meta.url));
      req.files.image.mv(path.join(__dirname, "..", "uploads", fileName));

      //console.log("req.files");
      const imageurl = "https://tickle.blob.core.windows.net/post/" + fileName;
      const newPostWithImage = new Post({
        title,
        content,
        imageURL: fileName,
        tags,
        reactions: req.body.reactions,
        user: req.userId,
      });
      await newPostWithImage.save();

      //push post into user table
      await User.findByIdAndUpdate(req.userId, {
        $push: { posts: newPostWithImage },
      });

      return res.json(newPostWithImage);
    }

    // console.log("!req.files");

    const newPostWithoutImage = new Post({
      title,
      content,
      imageURL: "",
      tags,
      reactions: req.body.reactions,
      user: req.userId,
    });

    // console.log(newPostWithoutImage);

    await newPostWithoutImage.save();

    await User.findByIdAndUpdate(req.userId, {
      $push: { posts: newPostWithoutImage },
    });

    return res.json(newPostWithoutImage);
  } catch (error) {
    // console.log(object);
    res.json({ message: "Something went wrong" });
  }
};

//Get all posts
export const getAll = async (req, res) => {
  try {
    // const posts = await Post.find().sort("-createdAt").populate("user").exec(); //detailed output with all user info
    const posts = await Post.find().sort("-createdAt");
    if (!posts) {
      return res.json({ message: "No posts" });
    }
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Get post by id
export const getById = async (req, res) => {
  try {
    const post = await Post.findOne(req.params._id);
    // const post = await Post.findById(req._id);
    res.json(post);
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
};

// Get all posts of one user
export const getMyPosts = async (req, res) => {
  console.log("jhgjhgjuser");
  try {
    const user = await User.findById(req.userId);

    console.log("user");

    const list = await Promise.all(
      user.posts.map((post) => {
        return Post.findById(post._id);
      })
    );

    res.json(list);
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
};

// Remove post
export const removePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.json({ message: "Cannot find the post" });

    await User.findByIdAndUpdate(req.userId, {
      $pull: { posts: req.params.id },
    });

    res.json({ message: "The post was removed" });
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
};

// Update post
export const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findById(req.params.id);

    //console.log(title);

    if (req.files) {
      let fileName = Date.now().toString() + req.files.image.name;
      const __dirname = dirname(fileURLToPath(import.meta.url));
      req.files.image.mv(path.join(__dirname, "..", "uploads", fileName));
      post.imageURL = fileName || "";
    }

    post.title = title;
    post.content = content;
    //post.tags = tags;
    //post.reactions = req.body.reactions;
    //post.user = req.userId;

    await post.save();

    res.json(post);
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
};
