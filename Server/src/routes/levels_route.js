const express = require("express");
const userController = require("../controllers/user_controller");

const LevelsRoute = express.Router();

LevelsRoute.post("/", userController);
LevelsRoute.post("/checkUser", userController);
module.exports = LevelsRoute;