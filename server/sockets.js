module.exports = function(io){
  io.on('connection', function(socket){
    //socket.broadcast.emit('hi');
    console.log('a connection');
    socket.on('pad input', function(msg){
        io.emit('pad input', msg);
        console.log('init button ' + msg);
    });
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });
}
