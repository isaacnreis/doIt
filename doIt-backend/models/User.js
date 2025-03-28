import pool from "../config/db.js";
import bcrypt from "bcryptjs";

export default class User {
  static async createUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );
    return result.insertId;
  }

  static async findByUsername(name) {
    const [rows] = await pool.query("SELECT * FROM users WHERE name = ?", [
      name,
    ]);
    return rows.length > 0 ? rows[0] : null;
  }

  static async findByEmail(email) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows.length > 0 ? rows[0] : null;
  }
}
