const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");

const Task = sequelize.define(
  "Task",
  {
    task_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    is_completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deadline: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    assigned_to: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING(10),
      defaultValue: "medium",
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: "tasks", // Ensure the table name is explicitly set
  }
);

module.exports = Task;
