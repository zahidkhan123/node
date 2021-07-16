const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("you are on the homepage");
  } else if (req.url === "/about") {
    res.end("you are on the about page");
  } else if (req.url === "/contact") {
    res.end("you are on the contact page");
  } else {
    res.end(
      `<h1>Ooops!</h1><p>we did't find your requested file please back to home</p>`
    );
  }
});

server.listen("2000", (port) => {
  console.log(`listning to the port`);
});
