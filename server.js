import sequelize from "./src/config/database.js";
import todosRouter from "./src/routes/todosRouter.js";
import app from "./src/app.js";

try {
	await sequelize.authenticate();
	await sequelize.sync();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

app.listen(5000, () => {
	console.log("Server listening on port 5000");
});
