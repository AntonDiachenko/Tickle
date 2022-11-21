import { Router } from "express";
import { byId } from "../controllers/users.js";
// import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

// Login
// http://localhost:8800/api/auth/login
router.get("/byId/:id", byId);

export default router;
