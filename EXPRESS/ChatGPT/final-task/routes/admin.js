const express = require("express");
const router = express.Router();

// Task #3

router.get("/dashboard", (req, res) => {
  res.send("Welcome to Admin Dashboard");
});

// Task #4

router.use("/", (req, res, next) => {
  const sitestamp = Date.now();
  const myDate = new Date(sitestamp);
  console.log(`${myDate} ${__dirname}`);
  next();
});

router.get("/", (req, res) => {
  res.send("Welcome to Admin Routes using middleware");
  next();
});

module.exports = router;
