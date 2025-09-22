// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 4000;

// const server = createServer((req, res) => {
//   if (req.url === "/") {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.end("<h1>Home Page</h1>");``
//   } else {
//     res.statusCode = 404;
//     res.setHeader("Content-Type", "text/html");
//     res.end("<h1 style='color:red; font-size: 200px;'>Page Not Found</h1>");
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// ROUTING TASK


// 🛠️ Mini Task
// Ek simple Node server bana jo:
// ✅ / par Home Page render kare
// ✅ /about par About Us likhe
// ✅ /contact par Contact Page likhe
// ✅ Aur kisi aur path pe 404 Page Not Found dikhaye

const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 5000;

const server = createServer((req, res) => {
  if ((req.url === "/")) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h2> THIS IS MY HOME PAGE </h2>");
  }
   else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h2> THIS IS MY ABOUT US PAGE </h2>");
  }
   else if (req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h2> THIS IS MY CONTACT US PAGE </h2>");
  }
  else{
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h2> PAGE NOT FOUND!!! </h2>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
