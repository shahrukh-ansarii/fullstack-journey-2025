import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo");
    console.log("DB Connected Successfully!");
  } catch (error) {
    console.log("DB Error", error);
  }
};

export default connectDB;
