import pool from "../config/db.js";
import bcrypt from "bcrypt";

/* ========== User Registration ========== */

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // basic validation
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!role || !['student', 'teacher'].includes(role.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (name, email, password, role)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [name, email, hashedPassword, role];
    const result = await pool.query(query, values);

    res.status(201).json({
      message: "User registered successfully",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

/* ========== User Login ========== */

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // basic validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // find user by email
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await pool.query(query, [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result.rows[0];

    // compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // token valid for 1 day
    );

    // respond with token and user info
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

/* ========== RESET PASSWORD========== */
export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // validation
    if (!email || !newPassword) {
      return res.status(400).json({ message: "Email and new password are required" });
    }

    // check if user exists
    const userQuery = "SELECT * FROM users WHERE email = $1";
    const userResult = await pool.query(userQuery, [email]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // update password in database
    const updateQuery = `
      UPDATE users
      SET password = $1
      WHERE email = $2
      RETURNING id, name, email, role;
    `;
    const updatedUser = await pool.query(updateQuery, [hashedPassword, email]);

    res.status(200).json({
      message: "Password reset successful",
      user: updatedUser.rows[0],
    });
  } catch (error) {
    console.error("Error resetting password:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
