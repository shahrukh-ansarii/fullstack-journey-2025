const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("Products Home page");
});

// define the Productss inner route
router.get("/:slug", (req, res) => {
  res.send(`Welcome to Products ${req.params.slug}`);
});

module.exports = router;
