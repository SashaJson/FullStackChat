'use strict';

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const m = (name, text, id) => ({name, text, id});

io.on('connect', socket => {

  socket.on('userJoined', (data, callback) => {

    if (!data.name || !data.room) {
      return callback('Date incorrect');
    }

    socket.join(data.room);
    callback({userId: socket.id});

    socket.emit('newMessage', m('admin', `Welcome ${data.name}`));
    io.sockets.in(data.room)
      .emit('newMessage', m('admin', `User ${data.name} join`));

  });

  socket.on('createMessage', data => {

    setTimeout(() => {
      socket.emit('newMessage', {
        text: data.text + ' SERVER'
      })
    }, 500);

  });

});

module.exports = {app, server};
