//carregando o serviço
var http = require('http');

//crinado o servidor
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
  });
   
  // Listen on port 8000, IP defaults to 127.0.0.1
  server.listen(8000);
   
  // Put a friendly message on the terminal
  console.log("Server running at http://127.0.0.1:8000/");