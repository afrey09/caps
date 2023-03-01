'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// socket server singleton: listening for events at localhost:3001
const server = new Server();
const caps = server.of('/caps');

caps.on('connection', (socket) => {
  // socket connection to namespace(the eventpool)
  console.log('Socket connected', socket.id);
  