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
    }
 
};