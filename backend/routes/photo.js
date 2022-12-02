import { Router } from "express";
import {
//   createPost,
  getAll,
  getPhotosbyuserid,
//   getMyPosts,
//   getTimelinePosts,
//   getProfilePosts,
//   removePost,
//   updatePost,
} from "../controllers/photos.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();


//http://localhost:8800/api/photos
router.get("/", checkAuth, getAll);

// Get all user's photos
// http://localhost:8800/api/photos/byuserid/:userid
router.get("/byuserid/:userid", checkAuth, getPhotosbyuserid);

export default router;