import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://<username>:<yourpassword>@<clustername>.gtgglkv.mongodb.net/fooddeli').then(()=>console.log("DB Connected"))
}


