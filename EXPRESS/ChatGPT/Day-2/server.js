const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index", { username: "Naveed" });
//   app.set("Hello World");
});

app.listen(port, () => {
  console.log(`This is my port ${port}`);
});
