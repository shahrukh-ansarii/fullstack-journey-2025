const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("Blog Home Page");
});

// define the blogs inner route
router.get("/:slug", (req, res) => {
  res.send(`Welcome to Blog ${req.params.slug}`);
});

module.exports = router;
