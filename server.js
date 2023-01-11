const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>What is node JS and why it is used?</h1>");
    const details = {
      Definition:
        "Node. js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications.",
      Use: "Node. js is widely used for the back-end of applications, like using Express. js to build the back-end of classic web applications. Also, it is used for server-side programming and non-blocking, event-driven servers like typical websites and backend API services.",
    };
    const jsonContent = JSON.stringify(details);
    res.end(jsonContent);
  })
  .listen(5000);
