import express from "express";
import {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasksController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getAllTasks); // Protege a listagem de tarefas
router.post("/", authenticateToken, createTask); // Protege a criação de tarefas
router.put("/:id", authenticateToken, updateTask); // Protege a atualização de tarefas
router.delete("/:id", authenticateToken, deleteTask); // Protege a exclusão de tarefas

export default router;
