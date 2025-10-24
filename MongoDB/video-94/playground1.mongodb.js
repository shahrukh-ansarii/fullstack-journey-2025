// Select the database to use.
use("sigmadatabase");

// Insert a few documents into the courses collection.
db.getCollection("courses").insertMany([
  {
    name: "Java Programming",
    price: 2000,
    instructor: "Shahrukh Bhai",
  },
  {
    name: "Python for Beginners",
    price: 1500,
    instructor: "Ahmed Khan",
  },
  {
    name: "Web Development Bootcamp",
    price: 3500,
    instructor: "Sara Ali",
  },
  {
    name: "React JS Masterclass",
    price: 2500,
    instructor: "Bilal Sheikh",
  },
  {
    name: "Node.js Backend Development",
    price: 2800,
    instructor: "Usman Tariq",
  },
  {
    name: "MongoDB Database Design",
    price: 1800,
    instructor: "Fatima Hassan",
  },
  {
    name: "Machine Learning with Python",
    price: 4000,
    instructor: "Dr. Kamran Ali",
  },
  {
    name: "Mobile App Development",
    price: 3200,
    instructor: "Zain Abbas",
  },
  {
    name: "Digital Marketing Course",
    price: 2200,
    instructor: "Ayesha Malik",
  },
  {
    name: "Graphic Design Fundamentals",
    price: 1600,
    instructor: "Hassan Raza",
  },
]);

// Print a message to the output window.
console.log(`Done Inserting Data`);
