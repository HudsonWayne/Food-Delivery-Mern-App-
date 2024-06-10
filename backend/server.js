import express from "express";
import cors from "cors";

const app = express();

const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection (assuming connectDB is defined here)
async function connectDB() {
  console.log("hdjd"); // Replace with your actual connection logic
  // ...
}

connectDB(); // Call the function

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
