require('./connections/DbConnection');
const cors = require('cors')
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors());

const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(routes);
app.listen(3333);
module.exports = { io }; 
