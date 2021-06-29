const data = require('../models/data');

module.exports = {
    create(req, res){
        const {id} = req.body;
        console.log(id);
        res = id;
        return res.json(id);
        //let busca = data.findOne({id})
    }
}