const data = require('../models/data');



module.exports = 
{
    async store(req,res){
        const { id, temperature, date } = req.body;
        const Data = await data.create({
            id,
            temperature,
            date,
        });
        return res.json(Data);
    },
    async index(req,res){
        const Data = await data.find();
        return res.json(Data)
    },
    async show(req,res){
        const id = req.query;
        const Data = await data.find(id);
        return res.json(Data);
    }
}