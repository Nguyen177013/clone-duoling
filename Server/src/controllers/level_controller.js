const LevelModel = require("../models/level_model");

class LevelController {
    async createLevel(req, res) {
        const Level = new LevelModel({
            user: [],
            questions: [],
        });
        Level.save();
        res.json(Level);
    }
    async updateUserLevel(req, res) {
        const updateUser = await LevelModel.findByIdAndUpdate(
            { _id: req.body._id },
            {$push : {user : req.body.id_User}},
            { new: true }
        );
        res.json(updateUser);
    }
    async updateQuestionLevel(req, res){
        const updateQuestion = await LevelModel.findByIdAndUpdate(
            { _id: req.body._id },
            {$push : {questions : req.body.id_Question}},
            { new: true }
        );
        res.json(updateQuestion);
    }
}

module.exports = new LevelController();
