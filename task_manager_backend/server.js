require("@babel/register")({
  presets: ["@babel/preset-env"],
});
const express = require("express");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/users", (req, res) => {
  // Use the pool object to execute queries in your route handlers
  pool.query("SELECT * FROM tasks", (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Error fetching tasks");
    } else {
      res.json(result.rows);
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
