import sequelize from "../config/database.js" 

export default const Task = sequelize.define(
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

