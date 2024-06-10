import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('//mongodb+srv://hudsonnbenhuraa:<Hudsonnbenhuraa2003.>@cluster0.htt3fcq.mongodb.net/food del').then(()=>console.log("DB Connected"));
}




// mongodb+srv://hudsonnbenhuraa:<password>@cluster0.htt3fcq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0