const { Router } = require('express');
const dataController = require('./Controller/dataController');
const {port , parser} = require('./connections/SerialConnection');
const io  = require('socket.io')();

io.listen(3000);

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

routes.post('/id', dataController.store); 
routes.get('/id', dataController.index);
routes.get('/search',dataController.show)

module.exports = routes;