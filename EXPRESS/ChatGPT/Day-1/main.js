const express = require("express");
const path = require("path");
const { join } = require("path");

    
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/:slug/:second", (req, res) => {
  res.send(
    `Hello This is first slug <b> ${req.params.slug} </b> and this is second slug <b> ${req.params.second}</b> `
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
