const express = require("express");
const userController = require("../controllers/user_controller");

const userRouter = express.Router();

userRouter.post("/create", userController);
userRouter.post("/checkUser", userController);
module.exports = userRouter;
