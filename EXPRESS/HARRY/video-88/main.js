const express = require("express");
const app = express();
const port = 5000;

// For Public File

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World3!");
});
app.get("/:slug", (req, res) => {
  res.send(`Hello ${req.params.slug} `);
});
app.get("/:slug/:secondSlug", (req, res) => {
  res.send(`Hello ${req.params.slug} and ${req.params.secondSlug}  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
