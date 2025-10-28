import express from "express";
import connectDB from "./config/db.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import path from "path";

const app = express();
const port = 5000;

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(express.static("public"));
app.use("/", employeeRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
