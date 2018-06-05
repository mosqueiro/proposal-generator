var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8100"); //The ionic server
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var port = Number(process.env.PORT || 8810);

io.on('connection', function (socket) {
    console.log('ping-pong started');
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
