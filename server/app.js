'use strict';

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('Connected', socket => {
  console.log('IO Connected');
})

module.exports = {
  app,
  server
};
