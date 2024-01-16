require("@babel/register")({
  presets: ["@babel/preset-env"],
});
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await prisma.tasks.findMany();
    res.json(tasks);
  } catch (err) {
    console.log("error in loading tasks", err);
  }
});

app.post("/api/tasks", (req, res) => {
  const newTask = req.body;

  res.status(200).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
