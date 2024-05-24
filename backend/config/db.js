import mongoose from "mongoose";

// db connection
// Database Connection
mongoose.connect("mongodb+srv://hudsonnbenhuraa:<password>@cluster0.5nrizx2.mongodb.net/food-del")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("DB Connection Error:", err));