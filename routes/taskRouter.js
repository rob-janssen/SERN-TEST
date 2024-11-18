const express = require("express");
const router = express.Router();
const db = require("../utils/db.config.js");
const Task = require("../models/task.model.js");

const mock_data = [
  {
    id: 1,
    title: "Task 113233",
    description: "Description 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    completed: false,
  },
];

router.get("/", async (req, res) => {
  const data = await Task.findAll();
  res.json(data);
});

router.get("/:id", (req, res) => {
  res.json({ message: `Get task by id route! Param: ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.json({ message: "Create task route!" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `Delete task by id route! Param: ${req.params.id}` });
});

router.put("/:id", (req, res) => {
  res.json({ message: `Update task by id route! Param: ${req.params.id}` });
});

module.exports = router;
