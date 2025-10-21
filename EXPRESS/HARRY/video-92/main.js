const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

metaTitle = "Bootstrap Demo";
brandName = "TEMPLATE WEB";
app.get("/", (req, res) => {
  res.render("index", { metaTitle, brandName });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
