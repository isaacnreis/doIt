import pool from "../config/db.js";

export default class Task {
  static async getAll(userId) {
    const [rows] = await pool.query("SELECT * FROM tasks WHERE user_id = ?", [
      userId,
    ]);
    return rows;
  }

  static async create(title, description, userId) {
    const [result] = await pool.query(
      "INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)",
      [title, description, userId]
    );
    return result.insertId;
  }

  static async update(id, title, description, userId) {
    const [result] = await pool.query(
      "UPDATE tasks SET title = ?, description = ? WHERE id = ? AND user_id = ?",
      [title, description, id, userId]
    );
    return result.affectedRows > 0;
  }

  static async delete(id, userId) {
    const [result] = await pool.query(
      "DELETE FROM tasks WHERE id = ? AND user_id = ?",
      [id, userId]
    );
    return result.affectedRows > 0;
  }
}
