const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const userName = req.query.name;
  const userCity = req.query.city;

  res.render("profile", { uName: userName, uCity: userCity });
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
