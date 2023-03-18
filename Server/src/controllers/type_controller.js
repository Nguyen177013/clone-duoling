const TypeModel = require("../models/type_model");

class typeController{
    async getAllTypes(req, res){
        const allTypes = await TypeModel.find();
        res.json(allTypes);
    }

    async createType(req, res){
        const type = req.body;
        await TypeModel.create(type);
        res.json(type);
    }
}

module.exports = new typeController;