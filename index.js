const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");})

  const port = process.env.PORT || 30000;
  server.listen(port, function () {
    console.log("Server listning on port 3000 :",port);
  });

// server.listen(3000, "localhost", function () {
//   console.log("Server listning on port 3000");
// });
