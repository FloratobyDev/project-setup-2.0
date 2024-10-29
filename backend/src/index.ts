// backend/src/index.ts

import express, { Request, Response } from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Configure the PostgreSQL client
const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // restrict access to the frontend app
}));

// Test the database connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error("Error connecting to database:", err.stack);
  else console.log("Database connected:", res?.rows[0]);
});

app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

// Sample API route
app.get("/api/data", async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query("SELECT * FROM sample_table"); // replace 'sample_table' with your table
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
