'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// socket server singleton: listening for events at localhost:3001
const server = new Server();
// create namespace
const caps = server.of('/caps');

// socket connection to namespace(the eventpool)
caps.on('connection', (socket) => {
  console.log('Socket connected', socket.id);
  socket.onAny((event, payload) => {
    const time = new Date();
    console.log('Event received', { event, payload, time });
  });

  // manage Pickup event
  socket.on('pickup', (payload) => {
    socket.broadcast.emit('pickup', payload);
  });

  // manage In-Transit event
  socket.on('in-transit', (payload) => {
    socket.broadcast.emit('in-transit', payload);
  });

  // manage Delivered event
  socket.on('delivered', (payload) => {
    socket.broadcast.emit('delivered', payload);

  });
});
server.listen(PORT);
