import mongoose from "mongoose";

export const connectBD = async ()=>{
    await mongoose.connect('mongodb+srv://hudsonnbenhuraa:<password>@cluster0.ir3wyw4.mongodb.net/').then(()=>console.log("DB Connected"));
}