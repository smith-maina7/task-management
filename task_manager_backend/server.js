require("@babel/register")({
  presets: ["@babel/preset-env"],
});
const express = require("express");
const sequelize = require("./sequelize");

const app = express();
const PORT = process.env.PORT || 3000;

sequelize
  .query("SELECT * FROM tasks")
  .then((rows) => {
    console.log(rows);
  })
  .catch((err) => {
    console.error(err);
  });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
