
module.exports = {
    create(req, res){
        const id = req.body;
        res.json(id);
        return(console.log("foi?"))
    }
}