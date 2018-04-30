
var dt = require('./server');

var socket = new WebSocket('ws://localhost:8081/');
socket.onopen = function(event) { 
  log('Opened connection 🎉');
  var json = JSON.stringify({ message: 'Hello' });
  socket.send(json);
  log('client1 Sent: ' + json);
}

socket.onerror = function(event) {
  log('client1 Error: ' + JSON.stringify(event));
}

socket.onmessage = function (event) {
  log('client1 Received: ' + event.data);
}

socket.onclose = function(event) {
  log('client1 Closed connection 😱');
}

document.querySelector('#close').addEventListener('click', function(event) {
  socket.close();
  log('client1 Closed connection 😱');
});

document.querySelector('#send').addEventListener('click', function(event) {
  var json = JSON.stringify({ message: 'Hey there server from client1' });
  socket.send(json);
  log('client1 Sent: ' + json);
});

var log = function(text) {
  var li = document.createElement('li');
  li.innerHTML = text;
  document.getElementById('log').appendChild(li);
}

window.addEventListener('beforeunload', function() {
  socket.close();
});


document.querySelector('#sendServer').addEventListener('click', function(event) {
  console.log("test");
  dt.broad();

});
