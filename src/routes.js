const { Router } = require('express');
const db = require('./models/data');

const {port , parser} = require('./connections/SerialConnection');
const io  = require('socket.io')({
    cors: {
      origin: "http://localhost:3000",
      }
  });

const tempStorage = {
    id: null,
    flag: false,
    version: null
};

io.listen(3334);
const routes = Router();

port.on("open",()=>{
    console.log("Comunicando com a porta serial...");
});
parser.on("data", function(data) {
    if((data=="FLAG")&&(tempStorage.id!=null)){
        io.emit("flag",true);
        tempStorage.flag = true;
    }
    else if(data!="FLAG"){
        if((tempStorage.flag)&&(tempStorage.id))
        { 
            const id = tempStorage.id;
            const temperature = parseFloat(data);
            const date = Date.now();
            const version = tempStorage.version;
            db.create({
                id,
                temperature,
                date,
                version
            });
            io.emit("Chart", {temperature: temperature, /*time: Date.UTC()*/ })
            io.emit("temperature", data);
            console.log("temperature", data);
        }  
        
        else
        {
            io.emit("temperature", data);
        }
    }
});
routes.post('/', async (req, res) => { 
    tempStorage.id = req.body.id;
    await db.findOne({'id': tempStorage.id}).sort({ date: -1 }).limit(1).exec(function(err, res){
        if(err){
            console.log("Deu erro meu rei!");
        }
        else{
            if(res) {
                tempStorage.version=res.version+1;
                console.log(tempStorage.version);
                console.log('bateu aqui');
            }
            else{
                tempStorage.version = 1;
                console.log(tempStorage.version);
            }
        }
    });
    console.log(tempStorage.id);
    return console.log('ok');
});
module.exports = routes;