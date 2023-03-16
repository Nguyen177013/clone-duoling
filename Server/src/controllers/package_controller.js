const PackageModel = require("../models/package_model");

class PackageController {
    async createPackage(req, res) {
        const Package = new PackageModel({
            title: req.body.title,
            levels: [],
        });
        Package.save();
        res.json(Package);
    }
    async addLevel(req, res) {
        const addLevel = await PackageModel.findOneAndUpdate(
            { _id: req.body._id },
            { $push: { levels: req.body.id_Level } },
            { new: true }
        );
        res.json(addLevel);
    }
    async getLevel(req, res){
        let data = await PackageModel.find({}).populate('levels');
        res.json(data);
    }
}

module.exports = new PackageController();
