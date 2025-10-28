import express from "express";
import { registerUser, loginUser, resetPassword } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser); // POST /api/users/register → Register a new user
router.post("/login", loginUser); // POST /api/users/login → Log in an existing user
router.post("/reset-password", resetPassword); // POST /api/users/reset-password → Reset user password

export default router;