import express from "express";
import todosRouter from "./routes/todosRouter.js";

const app = express();
app.use(express.json());
app.use("/api", todosRouter);

export default app;
