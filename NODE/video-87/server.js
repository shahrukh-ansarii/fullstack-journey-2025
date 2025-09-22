const fs = require("fs");

fs.writeFile("new2.txt", "This is my New TXT File", () => {
  console.log("file done");
});

fs.readFile("new2.txt", (err, data) => {
  console.log(data.toString());
});

fs.appendFile("new.txt", "Hello World!!!", (e, d) => {
  console.log(d);
});
