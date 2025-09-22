const express = require("express");
const path = require("path");
const { join } = require("path");
const admin = require("./routes/admin.js");
const api = require("./routes/api.js");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/admin", admin);
app.use("/api", api);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Task #1

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Task #2

app.get("/profile", (req, res) => {
  let user = req.query.username;
  let city = req.query.usercity;
  res.render("index", { user, city });
});

// Task #6 & #7
app
  .get("/test", (req, res) => {
    console.log(req.method, __dirname);
    res.send("Hello GET");
  })
  .post("/test", (req, res) => {
    console.log(req.method, __dirname);
    res.send("Hello post");
  })
  .put("/test", (req, res) => {
    console.log(req.method, __dirname);
    res.send("Hello put");
  })
  .delete("/test", (req, res) => {
    console.log(req.method, __dirname);
    res.send("Hello delete");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
