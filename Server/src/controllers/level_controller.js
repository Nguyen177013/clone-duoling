const LevelModel = require("../models/level_model");

class LevelController {
    async createLevel(req, res) {
        const Level = new LevelModel({
                user : [],
                questions : [],
            });
        Level.save();
        res.json(Level);
    }
    
}

module.exports = new LevelController();