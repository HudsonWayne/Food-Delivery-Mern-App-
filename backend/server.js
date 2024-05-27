import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// App Configuration
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

// Server Start
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

