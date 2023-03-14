const express = require("express");
const userController = express.Router();
const User = require("../models/user_model");
const bcrypt = require("bcrypt");

userController.post(
    "/create",
    async (req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        if (username == null || username == "") {
            res.json({ message: "fail" });
        } else {
            try {
                const salt = await bcrypt.genSalt(10);
                const newPassword = await bcrypt.hash(password, salt);
                req.username = username;
                req.password = newPassword;
                req.email = email;
                next();
            } catch (error) {}
        }
    },
    async (req, res) => {
        const user = await new User({
            username: req.username,
            password: req.password,
            email: req.email,
        });
        user.save();
        res.json(user);
        // const check = await bcrypt.compare('password', req.password)
    }
);

userController.post("/checkUser", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const getUser = await User.findOne({ username: username });
    if (getUser != null) {
        const checkPass = await bcrypt.compare(password, getUser.password);
        if (checkPass == true && username != null) {
            if (getUser.isOld) {
                return res.json(getUser);
            } else {
                const newData = await User.findOneAndUpdate(
                    { username: username },
                    { isOld: true },
                    { new: true }
                );
                return res.json(newData);
            }
        }
        return res.json({ message: "Password is not correct." });
    } else {
        return res.json({ message: "Account is not correct." });
    }
});

module.exports = userController;
