import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://shan123:79sIPCyTOWby821t@cluster0har.gtgglkv.mongodb.net/fooddeli').then(()=>console.log("DB Connected"))
}


