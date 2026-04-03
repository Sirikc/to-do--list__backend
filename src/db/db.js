import { Sequelize, DataTypes } from "sequelize";

let sequelize;
if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
  });
}

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  taskDescription: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
},
  {
    tableName: 'tasks',
    timestamps: false,
  });

export { sequelize, Task };
