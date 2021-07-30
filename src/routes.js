const { Router } = require('express');
const dataController = require('./Controller/dataController');
const {port , parser} = require('./connections/SerialConnection');
const io  = require('socket.io')({
    cors: {
      origin: "http://localhost:3000",
      }
  });

const tempStorage = {
    id: null,
    flag: false
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
            io.emit(async () => {
                    const id = tempStorage.id;
                    const temperature = data;
                     const Dados = await data.create({
                        id,
                        temperature,
                        //date,
                });
                return res.json(Dados);}
                );
        }  
        
        else
        {
            io.emit("temperature", data);
        }
    }
});

///routes.post('/id', dataController.store); 
///routes.get('/id', dataController.index);
routes.get('/search',dataController.show);
routes.post('/', (req, res) => { 
    tempStorage.id = req.body;
    console.log(tempStorage.id);
    return console.log('ok');
});
module.exports = routes;