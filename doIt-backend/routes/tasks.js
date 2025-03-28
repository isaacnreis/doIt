import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.getAll();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const taskId = await Task.create(title, description);
  res.status(201).json({ id: taskId, title, description });
});

export default router;
