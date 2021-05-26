const { Router } = require('express');
const dataController = require('./Controller/dataController');
const {port , parser} = require('./connections/SerialConnection');
const io  = require('socket.io')();

const routes = Router();

let temperature;

port.on("open",()=>{
    console.log("Comunicando...");
});
parser.on("data", function(data) {
    temperature = data;
    console.log("entrou");
    if(temperature!=0){
        io.emit("temperature", temperature);
        console.log(temperature); // teste para saber se tá entrando aqui;
    }
});

routes.post('/', dataController.store); 
routes.get('/id', dataController.index);
routes.get('/search',dataController.show)

module.exports = routes;
