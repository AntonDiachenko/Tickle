
import Photo from "../models/Photos.js";
import User from "../models/Users.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { BlobServiceClient } from "@azure/storage-blob";
import Friendships from "../models/Friendships.js";


// get all photos
export const getAll = async (req, res) => {
    try {
      
      const photos = await Photo.find().sort("-album");
      if (!photos) {
        return res.json({ message: "No photos" });
      }
      res.json(photos);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };

// Get all photos of one user
export const getPhotosbyuserid = async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      const photos = await Promise.all(
        user.photos.map((photo) => {
          return Photo.findById(photo._id);
        })
      );
  
      res.status(200).json(list);
    } catch (error) {
      res.status(500).json({ message: "Something went toooo wrong" });
    }
  };