import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js"; // Assuming connectDB is exported

const app = express();

const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection (call the imported function)
connectDB();

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export async function connectDB() {
    console.log("hdjd")
  }