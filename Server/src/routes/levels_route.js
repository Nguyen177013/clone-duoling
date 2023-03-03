const express = require("express");
const userController = require("../controllers/user_controller");

const QuestionsRoute = express.Router();

userRouter.post("/", userController);
userRouter.post("/checkUser", userController);
module.exports = userRouter;