import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"



//App Config

const app = express()
const port = 4000

//middleware

app.use(express.json())
app.use(cors())

//db connection
connectDB();


app.get("/",(req, res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})
//mongodb+srv://hudsonnbenhuraa:<password>@cluster0.ir3wyw4.mongodb.net/?