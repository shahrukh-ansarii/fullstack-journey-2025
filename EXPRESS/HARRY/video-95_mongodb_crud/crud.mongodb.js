
// Select the database to use.
use('crudDb');

// Create Collection
db.createCollection("courses")

// INSERT data to Collection

// db.courses.insertMany([
//     { name: "JavaScript", price: 1200, assignment: 25, project: 10 },
//   { name: "Python", price: 1500, assignment: 20, project: 8 },
//   { name: "Java", price: 1700, assignment: 30, project: 12 },
//   { name: "React", price: 2000, assignment: 18, project: 15 },
//   { name: "Node.js", price: 1800, assignment: 22, project: 10 },
//   { name: "PHP", price: 1300, assignment: 28, project: 9 },
//   { name: "C++", price: 1600, assignment: 24, project: 7 },
//   { name: "HTML & CSS", price: 1000, assignment: 15, project: 5 },
//   { name: "SQL", price: 1100, assignment: 20, project: 6 },
//   { name: "Django", price: 1900, assignment: 21, project: 11 },
//   { name: "TypeScript", price: 1750, assignment: 19, project: 8 },
//   { name: "Angular", price: 2100, assignment: 27, project: 13 },
//   { name: "Vue.js", price: 1850, assignment: 23, project: 10 },
//   { name: "Ruby", price: 1400, assignment: 17, project: 7 },
//   { name: "Go", price: 1550, assignment: 16, project: 6 }
// ])

// READ data 

// Returns the first document that matches the condition
db.courses.findOne({price: 2000})

// let a = db.courses.find({price: 2000})
// console.log(a.count())
// console.log(a.toArray())
// console.log(a)


// UPDATE data to Collection

// db.courses.updateOne({price:1500}, {$set:{price: 1499}})
// db.courses.updateMany({price:1000}, {$set:{price: 999}})

// DELETE data to Collection

// db.courses.deleteOne({name:"Go"})
// db.courses.deleteMany({price:999})

