// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");

  var shell = require("shelljs");

  shell.exec("curl https://install.sandstorm.io | bash");
});

// Last, but not least, listen on port 8080
server.listen(8080);
