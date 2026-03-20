import { getTasks, getTaskById, createTask, updateTask, deleteTask } from "../controllers/todoController.js";
import express from "express";

const router = express.Router();

router.get("/tasks", getTasks);
router.get("/tasks/:taskId", getTaskById);
router.post("/tasks", createTask);
router.put("/tasks/:taskId", updateTask);
router.delete("/tasks/:taskId", deleteTask);


export default router;
