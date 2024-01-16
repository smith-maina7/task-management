require("@babel/register")({
  presets: ["@babel/preset-env"],
});
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/api/tasks", (req, res) => {
  const newTask = req.body;

  res.status(200).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
