const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let port = process.env.PORT || 5000;

console.log('server started');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, function () { // MUST be http, NOT app
  console.log('Listening on port: ' + port);
});

io.on("connection", function (socket) {

  console.log('socket started');
  socket.emit('working');

  socket.on('tweet', function (data) {
    console.log('returned data on socket');
    socket.emit('retweet', data);
  });
});

export default app;
