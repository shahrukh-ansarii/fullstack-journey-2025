const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("Shop home page");
});

// define the Shops inner route
router.get("/:slug", (req, res) => {
  res.send(`Welcome to Shop ${req.params.slug}`);
});

module.exports = router;
