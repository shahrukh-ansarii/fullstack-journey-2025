import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  city: String,
  language: String,
  isManager: Boolean,
});

export default mongoose.model("Employee", employeeSchema);
