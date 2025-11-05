import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import pool from "../config/db.js"; // ✅ import DB connection

dotenv.config();

const router = express.Router();

router.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // ✅ Step 1: Store message in PostgreSQL
    const insertQuery = `
      INSERT INTO contact_messages (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const result = await pool.query(insertQuery, [name, email, message]);
    const savedMessage = result.rows[0];

    // ✅ Step 2: Send email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"EduNex Contact Form" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({
      success: true,
      message: "Mail sent and message stored successfully",
      data: savedMessage,
    });
  } catch (error) {
    console.error("Error processing contact message:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
