import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import pool from "../config/db.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [
    username,
    hashedPassword,
  ]);

  res.status(201).json({ message: "Usuário registrado" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const [users] = await pool.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);

  if (!users.length || !(await bcrypt.compare(password, users[0].password))) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  const token = jwt.sign({ userId: users[0].id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

export default router;
