const data = require('../models/data');

module.exports = {
    create(req, res){
        const {id} = req.body;
        console.log(id);
        //let busca = data.findOne({id})
    }
}