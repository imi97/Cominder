// Require (Firebase, websocket, http)
var firebase = require("firebase");
var firebaseConfig = require('./firebaseConfig');
var WebSocketServer = require('websocket').server;
var http = require('http');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Http server
var server = http.createServer();
const port = 9035;
server.listen(port, () => console.log(`Server started on port ${port}`));

// WebSocket
var wsServer = new WebSocketServer({
  httpServer: server
});

// Global variables
var connections = []; // List of connections users connected to the webSocket

// WebSocket on request
wsServer.on('request', (req) => {
  var connection = req.accept(null, req.origin);
  var index;
  
  console.log("Hello");
  connection.send(JSON.stringify({type: "LoginOK"}));

  connection.on('message', (msg) => {
    if (msg.type === 'utf8') {
      msg = JSON.parse(msg.utf8Data);
      console.log(msg)
    }
  });

  connection.on('close', (connection) => {
    console.log('User is gone');

    connections.splice(index, 1);
  });
});