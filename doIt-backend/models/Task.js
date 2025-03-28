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

  static async update(id, title, description) {
    const [result] = await pool.query(
      "UPDATE tasks SET title = ?, description = ? WHERE id = ?",
      [title, description, id]
    );
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
    return result.affectedRows > 0;
  }
}
