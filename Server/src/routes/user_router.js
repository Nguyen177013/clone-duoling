const express = require("express");
const userController = require("../controllers/user_controller");
const authController = require("../controllers/auth_controller");
const userRouter = express.Router();

userRouter.post("/create", userController);
userRouter.post("/checkUser", userController);


userRouter.post("/signup",authController.authSignup);
userRouter.post("/login",authController.authLogin);
module.exports = userRouter;
