const PackageModel = require('../models/package_model');

class PackageController {
    async getAllPackages(req, res){
        let data = await PackageModel.find();
        res.json(data);
    }
}

module.exports = new PackageController;