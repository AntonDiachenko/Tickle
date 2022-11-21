import Users from "../models/Users.js";
// import bcrypt from "bcryptjs";
import { response } from "express";
import jwt from "jsonwebtoken";

export const byId = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
