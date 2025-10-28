import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/company");
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Not Connected", error);
  }
};

export default connectDB;

