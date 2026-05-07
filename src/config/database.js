import { Sequelize, DataTypes } from "sequelize";
import "dotenv/config";

let sequelize;
if (process.env.NODE_ENV === "production") {
	sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
	sequelize = new Sequelize({
		dialect: "sqlite",
		storage: "./database.sqlite",
	});
}

export default { sequelize };
