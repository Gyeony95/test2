var socketio = require('socket.io').listen(3000)
var agents = require('./UserAgent.js')();
var socketmsg = require('./SocketMsg.js')(socketio, agents);
var colors = require('colors');

console.log('EasyRTC Server listening on port 3000'.red);