const express = require("express");
const LevelsRoute = express.Router();
const levelController = require("../controllers/level_controller");

LevelsRoute.post('/createLevel', levelController.createLevel);

module.exports = LevelsRoute;
