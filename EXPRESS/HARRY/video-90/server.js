const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

// Middleware #1
app.use("/", (req, res, next) => {
  const sitestamp = Date.now();
  const myDate = new Date(sitestamp);
  fs.appendFileSync("log.txt", `${myDate} and method is ${req.method}\r\n`);
  next();
});

// Middleware #2
app.use("/", (req, res, next) => {
  const sitestamp = Date.now();
  const myDate = new Date(sitestamp);
  console.log(`${myDate} ${__dirname}`);
  next();
});

// #Task
app.use("/admin", (req, res, next) => {
  const sitestamp = Date.now();
  const myDate = new Date(sitestamp);
  console.log(`${myDate} ${__dirname}`);
  console.log("This is Admin Middleware");
  next();
});

app.get("/admin", (req, res, next) => {
  res.send("This is Admin Dashboard");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World 1");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
