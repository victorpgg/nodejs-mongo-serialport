require('./connections/DbConnection');

const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(routes);
server.listen(3000);

module.exports = { io }; 

