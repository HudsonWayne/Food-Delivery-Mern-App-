import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// App Configuration
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect("mongodb+srv://hudsonnbenhuraa:<1234>ping _mongodb._tcp.luster0.5nrizx2.mongodb.net/food-del")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("DB Connection Error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

// Server Start
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});