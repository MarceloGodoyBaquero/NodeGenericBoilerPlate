import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const {MONGO_URI} = process.env

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    console.log(error)
  }
}