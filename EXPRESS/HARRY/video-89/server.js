const express = require("express");
const blogs = require("./routes/blogs.js");
const shops = require("./routes/shops.js");

const app = express();
const port = 3000;

app.use("/blogs", blogs);
app.use("/shops", shops);

// Public file Serving
app.use(express.static("public"));

// GET REQUEST
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// POST REQUEST
app.post("/", (req, res) => {
  res.send("Hello World POST");
  console.log("This is POST Request");
});

// PUT REQUEST
app.put("/", (req, res) => {
  res.send("Hello World PUT");
  console.log("This is PUT Request");
});

// DELETE REQUEST
app.delete("/", (req, res) => {
  res.send("Hello World DELETE");
  console.log("This is DELETE Request");
});

// CHAINING CONCEPT

// app
//   .get("/", (req, res) => {
//     res.send("Hello World!!");
//     console.log("This is GET Request");
//   })
//   .post("/", (req, res) => {
//     res.send("Hello World POST");
//     console.log("This is post Request");
//   })
//   .put("/", (req, res) => {
//     res.send("Hello World PUT");
//     console.log("This is put Request");
//   })
//   .delete("/", (req, res) => {
//     res.send("Hello World Delete ");
//     console.log("This is delete Request");
//   });

// SERVING HTML FILE

app.get("/myTemp", (req, res) => {
  console.log("Hey this is index");
  res.sendFile("templates/myTemp.html", { root: __dirname });
});

// API Route

app.post("/api", (req, res) => {
  // res.send("Hey this is api routes");
  res.json("a : 1 , b: 2, c: 3 , name = {ali , hasan}");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
