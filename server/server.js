const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 4000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.emit('newMessage', {
    from: 'Andrew',
    text: 'Hey, can you meet up at six',
    createdAt: 123
  });

  socket.on('createMessage', (msg) => {
    console.log('createMessage', msg);
  });
});

server.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});
