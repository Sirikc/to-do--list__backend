import { sequelize } from "./src/db/db.js";
import todosRouter from "./src/routes/todosRouter.js";
import express from "express"
import 'dotenv/config';

try {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const app = express();
app.use(express.json());
app.use("/api", todosRouter);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
