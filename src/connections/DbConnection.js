const mongoose = require('mongoose');

db = getConnect();

async function getConnect(){
    return await mongoose.connect('mongodb+srv://victorpgg:Brasil6252987@cluster0.by4jx.mongodb.net/Data?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
}

module.exports = db;