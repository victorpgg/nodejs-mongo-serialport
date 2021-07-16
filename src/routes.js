const { Router } = require('express');
const dataController = require('./Controller/dataController');
const SessionController = require('./Controller/SessionController');
const {port , parser} = require('./connections/SerialConnection');
const io  = require('socket.io')({
    cors: {
      origin: "http://localhost:3000",
      }
  });

io.listen(3334);

const routes = Router();

port.on("open",()=>{
    console.log("Comunicando com a porta serial...");
});
parser.on("data", function(data) {
    if(data=="FLAG"){
        console.log(data);
        io.emit("flag",true);
    }
    else if(data!="FLAG"){
        io.emit("temperature", data);
        console.log(data);
    }
});

///routes.post('/id', dataController.store); 
///routes.get('/id', dataController.index);
routes.get('/search',dataController.show);
routes.post('/', SessionController.create);
module.exports = routes;