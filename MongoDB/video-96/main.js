import express from "express";
import connectDB from "./config/db.js";
import { Todo } from "./models/todo.js";

const app = express();
const port = 3000;

connectDB();

app.get("/", (req, res) => {
  const todo = new Todo({
    title: "This is my 2nd Todo Title",
    decs: "This is my Description",
    isDone: true,
    year: 2025,
    Rnumber: Math.floor(Math.random() * 35) + 1,
  });
  todo.save();
  res.send("Hello World!");
});

app.get("/a", async (req, res) => {
  const todo = await Todo.findOne({});
  console.log(todo);
  res.json({ title: todo.title, decs: todo.decs, isDone: todo.isDone });
});

app.get("/all", async (req, res) => {
 try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
