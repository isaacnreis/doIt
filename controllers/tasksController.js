import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  const tasks = await Task.getAll(req.user.id);
  res.json(tasks);
};

export const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const taskId = await Task.create(title, description, req.user.id);
    res.status(201).json({ id: taskId, title, description });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updated = await Task.update(id, title, description, req.user.id);
  if (updated) {
    res.json({ message: "Tarefa atualizada com sucesso!" });
  } else {
    res.status(404).json({ error: "Tarefa não encontrada" });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deleted = await Task.delete(id, req.user.id);
  if (deleted) {
    res.json({ message: "Tarefa excluída com sucesso!" });
  } else {
    res.status(404).json({ error: "Tarefa não encontrada" });
  }
};
