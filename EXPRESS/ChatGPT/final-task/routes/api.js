const express = require("express");
const router = express.Router();

// Task #5

router.post("/", (req, res) => {
   res.json({ message: "Hello API POST", status: "success" });
});

module.exports = router;
