use('CrudTask') 

db.createCollection("courses")

// db.courses.insertMany([
//     { name: "JavaScript", price: 1200, assignment: 25, project: 10 },
//     { name: "JavaScript", price: 1200, assignment: 25, project: 10 },
//     { name: "Python", price: 1500, assignment: 20, project: 8 },
//     { name: "Java", price: 1700, assignment: 30, project: 12 },
//     { name: "React", price: 2000, assignment: 18, project: 15 },
//     { name: "Node.js", price: 1800, assignment: 22, project: 10 },
// ])

db.courses.find({price:{ $gt:1200}}).count();

// let a = db.courses.find({price:{ $gt:1200}});
// console.log(a.count())


// db.courses.updateMany({},
//    {$set:{level: "Intermediate"}}
// )

db.courses.deleteOne({project:{$lt : 15}})
