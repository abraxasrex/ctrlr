var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.use(express.static(path.join(__dirname, '../public')));

require('./sockets.js')(io);

http.listen(3000, function(){
  console.log('listening on *:3000');
});
