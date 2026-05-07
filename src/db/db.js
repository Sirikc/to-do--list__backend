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

const Task = sequelize.define(
	"Task",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		taskDescription: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isCompleted: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		tableName: "tasks",
		timestamps: false,
	},
);

const User = sequelize.define(
	"User",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "users",
		timestamps: false,
	},
);

User.hasMany(Task, {
	foreignKey: "userId",
});

Task.belongsTo(User, {
	foreignKey: "userId",
});

export { sequelize, Task, User };
