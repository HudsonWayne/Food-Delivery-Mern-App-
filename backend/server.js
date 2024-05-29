import express from "express"
import cors from "cors"



//app config
const app = express()

const port = 4000

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

//mongodb+srv://hudson:hudsonwayne@cluster0.qzxfxbw.mongodb.net/?

