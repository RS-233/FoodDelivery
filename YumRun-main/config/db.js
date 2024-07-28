import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rs3501194:87654321@cluster0.brxd3u4.mongodb.net/Fooddel').then(() => console.log("Database Connected"));
}

//mongodb+srv://rs3501194:87654321@cluster0.brxd3u4.mongodb.net/?