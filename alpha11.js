// 11.	Implement Web Sockets for real-time communication in your application (Implement Socket.io library).

const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = 3000;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/alpha11.html");
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});