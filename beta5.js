// 5.	Develop a simple calculator using plain JavaScript or any frontend library (no server required). 

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  fs.readFile(path.join(__dirname, 'beta5.html'), (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading calculator.html');
    }

    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});