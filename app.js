const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(3000); // <-- changed from 8080 to 3000

console.log('Server running on port 3000');