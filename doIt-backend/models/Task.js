import pool from "../config/db.js";

export default class Task {
  static async getAll() {
    const [rows] = await pool.query("SELECT * FROM tasks");
    return rows;
  }

  static async create(title, description) {
    const [result] = await pool.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description]
    );
    return result.insertId;
  }
}
