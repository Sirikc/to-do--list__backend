import { Task } from "../db/db.js";

export async function getTasks(req, res) {
  const tasks = await Task.findAll();

  res.status(200).json(tasks);
}

export async function getTaskById(req, res) {
  if (!req.params) {
    return res.status(400).json({ message: "Bad request" });
  }

  const { taskId } = req.params;
  const task = await Task.findByPk(taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({ task });

}

export async function createTask(req, res) {
  if (!req.body) {
    return res.status(400).json({ message: "Bad request" });
  }

  const { title, taskDescription, isCompleted } = req.body;
  const task = await Task.create({ title, taskDescription, isCompleted });

  res.status(201).json({ task });
}

export async function updateTask(req, res) {
  if (!req.params || !req.body) {
    return res.status(400).json({ message: "Bad request" });
  }

  const { taskId } = req.params;
  const { title, taskDescription, isCompleted } = req.body;
  const task = await Task.findByPk(taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  await task.update({ title, taskDescription, isCompleted });
  res.status(200).json({ task });
}

export async function deleteTask(req, res) {
  if (!req.params) {
    return res.status(400).json({ message: "Bad request" });
  }

  const { taskId } = req.params;
  const task = await Task.findByPk(taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  await task.destroy();
  res.status(200).json({ message: "Task deleted" });
}
