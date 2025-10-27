// CREATE DB
use("crudDB")

// console.log(db)

// CREATE COLLECTIONS
db.createCollection("courses")


// CREATE DATA
// db.courses.insertMany([
//   {
//     "name": "Java Programming",
//     "price": 2000,
//     "instructor": "Shahrukh Bhai",
//     "Assignment": 12,
//     "Projects": 45
//   },
//   {
//     "name": "Python for Beginners",
//     "price": 1800,
//     "instructor": "Ahmed Khan",
//     "Assignment": 8,
//     "Projects": 23
//   },
//   {
//     "name": "Web Development Bootcamp",
//     "price": 3500,
//     "instructor": "Sara Ali",
//     "Assignment": 20,
//     "Projects": 67
//   },
//   {
//     "name": "React JS Masterclass",
//     "price": 2700,
//     "instructor": "Bilal Sheikh",
//     "Assignment": 15,
//     "Projects": 38
//   },
//   {
//     "name": "Node.js Backend Development",
//     "price": 2900,
//     "instructor": "Usman Tariq",
//     "Assignment": 18,
//     "Projects": 52
//   },
//   {
//     "name": "MongoDB Database Design",
//     "price": 1600,
//     "instructor": "Fatima Hassan",
//     "Assignment": 10,
//     "Projects": 28
//   },
//   {
//     "name": "Machine Learning with Python",
//     "price": 4500,
//     "instructor": "Dr. Kamran Ali",
//     "Assignment": 25,
//     "Projects": 89
//   },
//   {
//     "name": "Mobile App Development",
//     "price": 3200,
//     "instructor": "Zain Abbas",
//     "Assignment": 22,
//     "Projects": 71
//   },
//   {
//     "name": "Digital Marketing Course",
//     "price": 2100,
//     "instructor": "Ayesha Malik",
//     "Assignment": 14,
//     "Projects": 34
//   },
//   {
//     "name": "Graphic Design Fundamentals",
//     "price": 1900,
//     "instructor": "Hassan Raza",
//     "Assignment": 11,
//     "Projects": 41
//   }
// ])

// READ DATA
// db.courses.findOne({price:2000})

// UPDATE DATA
// db.courses.updateOne({price:2000}, {$set:{price:1999}})
// db.courses.updateOne({instructor:"Shahrukh Bhai"}, {$set:{instructor:"Hassan Mehmood"}})
// db.courses.updateMany({Assignment:10}, {$set:{Assignment:22}})

// DELETE DATA
// db.courses.deleteOne({Assignment:22})
// db.courses.deleteMany({Assignment:22})
// db.courses.deleteOne({price:{$lt:1800}})

// ⚠️ Bonus: Common Query Operators
// Operator	Use
// $gt	Greater than
// $lt	Less than
// $in	Value matches in array
// $or	OR condition

let  a = db.courses.find({ price: { $gt : 2000 } }).count()
console.log(a)
