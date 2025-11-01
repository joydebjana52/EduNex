import express from "express";
import { registerUser, loginUser, resetPassword, getProfile, getDashboard } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser); // POST /api/users/register → Register a new user
router.post("/login", loginUser); // POST /api/users/login → Log in an existing user
router.post("/reset-password", resetPassword); // POST /api/users/reset-password → Reset user password

router.get("/profile", authMiddleware, getProfile); // user can see profile after authentication
// router.get("/dashboard", authMiddleware, getDashboard)

export default router;
