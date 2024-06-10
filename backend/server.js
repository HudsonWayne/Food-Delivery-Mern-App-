import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoutes.js";

const app = express();

const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection (assuming connectDB is defined here)
async function connectDB() {
  console.log("DB Connected"); // Replace with your actual connection logic
  // ...
}
//API EndPoints
app.use("/api/food", foodRouter)

connectDB(); // Call the function

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
