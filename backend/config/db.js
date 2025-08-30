import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect(process.env.MONGO_URL +'854469@cluster0.a1jc5ly.mongodb.net/food-del').then(() => console.log("DB connected Successfuly"));
}