import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoute.js";
import bodyParser from "body-parser";

const app = express();


const port = 4000;

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use(cors());

// Database connection (assuming connectDB is defined here)
async function connectDB() {
  console.log("DB Connected"); // Replace with your actual connection logic
  // ...
}
//API EndPoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))

connectDB(); // Call the function

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
