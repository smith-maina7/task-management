const { Pool } = require("pg");

// Create a pool instance with your database configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Task_Manager",
  password: "K3nnah#820",
  port: 5432, // Default PostgreSQL port
});
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    // Handle the connection error appropriately
  } else {
    console.log("Connected to the database:", res.rows[0]);
    // Log the test query result or further actions indicating a successful connection
  }
  pool.end(); // Close the pool
});

module.exports = pool;
