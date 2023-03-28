const express = require("express");
const userController = require("../controllers/user_controller");
const authController = require("../controllers/auth_controller");
const userRouter = express.Router();
const passport = require("passport");

userRouter.post("/create", userController);
userRouter.post("/checkUser", userController);

userRouter.post("/signup",authController.authSignup);
userRouter.post("/login",authController.authLogin);

userRouter.get('/google',passport.authenticate('google',{scope: ['profile', 'email']}));
userRouter.get('/google/callback', authController.googleLogin);
userRouter.get("/google/success",authController.googleSuccess);

userRouter.post("/sendmail",authController.sendMail);
userRouter.post("/reset-password",authController.changePassword);
module.exports = userRouter;
