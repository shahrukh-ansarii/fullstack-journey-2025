const express = require("express");
const app = express();
const port = 5000;




app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/:slug", (req, res) => {
//   res.send(`Hello ${req.params.slug} `);
// });
// app.get("/:slug/:secondSlug", (req, res) => {
//   res.send(`Hello ${req.params.slug} and ${req.params.secondSlug}  `);
// });

// app.get("/:slug", (req, res) => {
//   res.send(`Welcome to ${req.params.slug} Page`);
//   console.log(req.params);
//   console.log(req.query);
// });


// Serving static files in Express
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

// The function signature is:

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
