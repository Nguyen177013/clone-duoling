const express = require("express");
const LevelsRoute = express.Router();
const levelController = require("../controllers/level_controller");
const requireAuth = require("../middleware/requireAuthAdmin");

LevelsRoute.post("/createLevel", requireAuth, levelController.createLevel);
LevelsRoute.post("/updateUserLevel", levelController.updateUserLevel);
LevelsRoute.post(
  "/updateQuestionLevel",
  requireAuth,
  levelController.updateQuestionLevel
);
module.exports = LevelsRoute;
