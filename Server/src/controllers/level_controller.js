const LevelModel = require("../models/level_model");
const mongoose = require("mongoose");
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
        let user = await req.user;
        let levelId = req.body._id;
        const userContain = await LevelModel.find({ user: user._id , _id:levelId });
        if (userContain.length > 0) {
            return res.json({ mssg: "User already done this Level" });
        }
        const updateUser = await LevelModel.findByIdAndUpdate(
            { _id: levelId },
            { $push: { user: user._id } },
            { new: true }
        );
        return res.json(updateUser);
    }
    async updateQuestionLevel(req, res) {
        const updateQuestion = await LevelModel.findByIdAndUpdate(
            { _id: req.body._id },
            { $push: { questions: req.body.id_Question } },
            { new: true }
        );
        res.json(updateQuestion);
    }
}

module.exports = new LevelController();
