// const fs = require("fs");
import fs from "fs";

// fs.writeFile("new2.txt", "This is my New TXT File", () => {
//   console.log("file done");
// });

// fs.readFile("new2.txt", (err, data) => {
//   console.log(data.toString());
// });

// fs.appendFile("new.txt", "\n\n\nHello World!!!", (e, d) => {
//   console.log(d);
// });


// fs.writeFile("shah.txt", "This is my new JS file",()=>{
//  console.log("File Created!!!")
// })

fs.appendFile("shah.txt", "\n\n\n This line added fs append module",(e,d)=>{
  console.log(e,d)
})

fs.readFile("shah.txt",(e,d)=>{
 console.log(e, d.toString())
})


