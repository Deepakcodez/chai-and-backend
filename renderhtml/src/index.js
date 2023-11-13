const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Request URL:", req.url);
  console.log("Server started");

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");

      res.end(
        '<input placeholder= "enter name"></input><br><a href="/about">go to about</a>'
      );
      break;

    case "/about":
      res.end('<h1>about page</h1><br><a href="/">go to home</a>');
      break;
  }
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
