const http = require('http');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
   res.end();
 }).listen(3000);  // Using port 3000 to avoid conflicts
 console.log('Server running on port 3000');
