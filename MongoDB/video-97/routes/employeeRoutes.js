import express from "express";
import Employee from "../models/Employee.js";

const router = express.Router();

const names = [
  "Ali",
  "Sara",
  "Ayesha",
  "John",
  "Harry",
  "Bilal",
  "Zara",
  "Ahmed",
  "Maryam",
  "David",
];

const languages = [
  "Python",
  "JavaScript",
  "Java",
  ".NET",
  "PHP",
  "C++",
  "Ruby",
  "Go",
  "Swift",
  "TypeScript",
];

const cities = [
  "Karachi",
  "Delhi",
  "Sydney",
  "New York",
  "Dubai",
  "London",
  "Toronto",
  "Paris",
  "Tokyo",
  "Singapore",
];

// Fetch Data
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.render("index", { employees });
});

// Generate 10 Records (Delete old + Insert new)
router.post("/generate", async (req, res) => {
  await Employee.deleteMany({});

  for (let i = 0; i < 10; i++) {
    await Employee.create({
      name: names[Math.floor(Math.random() * names.length)],
      salary: Math.floor((50000 + Math.random() * 200000) / 5000) * 5000,
      language: languages[Math.floor(Math.random() * languages.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      isManager: Math.random() < 0.4,
    });
  }
  res.redirect("/");
});

// Clear Button Delete Data
router.post("/clear", async (req, res) => {
  await Employee.deleteMany();
  res.redirect("/");
});

export default router;
