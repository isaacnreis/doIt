import express from "express";
import {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasksController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAllTasks); // Protege a listagem de tarefas
router.post("/", authMiddleware, createTask); // Protege a criação de tarefas
router.put("/:id", authMiddleware, updateTask); // Protege a atualização de tarefas
router.delete("/:id", authMiddleware, deleteTask); // Protege a exclusão de tarefas

export default router;
