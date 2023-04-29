const mongoose = require('mongoose');
db = getConnect();

async function getConnect(){
    return await mongoose.connect('mongodb+srv://victorpgg:<password>>@cluster0.by4jx.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
}

module.exports = db;