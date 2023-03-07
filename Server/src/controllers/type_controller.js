const typeModel = require("../models/type_model");

class typeController{
    async getAllTypes(req, res){
        const allTypes = await typeModel.find();
        res.json(allTypes);
    }
}

module.exports = new typeController;