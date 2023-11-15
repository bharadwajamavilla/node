// 1.	Create a Node Js server that listens to port 6001.

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "text/plain"});
    res.end("Welcome");
})

const port = 537;

server.listen(port, () =>{
    console.log(`U are on Port ${port}`);
})