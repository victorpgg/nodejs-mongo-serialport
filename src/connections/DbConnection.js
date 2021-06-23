const data = require('../models/data');
db = getConnect();

async function getConnect(){
    return await mongoose.connect('mongodb+srv://login:senha@cluster0.by4jx.mongodb.net/Data?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
}

module.exports = db;