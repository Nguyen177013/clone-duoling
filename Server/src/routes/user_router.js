const express = require("express");
const userController = require("../controllers/user_controller");
const authController = require('../controllers/auth_controller');
const requireAuth = require("../middleware/requireAuth");

const userRouter = express.Router();

userRouter.post("/create", userController);
userRouter.post("/checkUser", userController);

userRouter.post('/login', authController.authLogin)
userRouter.post('/signup', authController.authSignup);
userRouter.post('/signinGoogle', authController.authGoogle);
userRouter.post('/updateImage', requireAuth,authController.updateImage);
module.exports = userRouter;
