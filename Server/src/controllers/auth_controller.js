const User = require("../models/user_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const requireAuth = require("../middleware/requireAuth");

function createToken(_id) {
    return jwt.sign({ _id }, process.env.TOKENSECRET, { expiresIn: "3d" });
}
class authController {
    // login
    async authLogin(req, res) {
        const { username, password } = req.body;
        try {
            const user = await User.signin(username, password);
            console.log("this is user: " + user);
            

            //   create token
            const token = createToken(user._id);
            res.status(200).json({ user, token });
        } catch (err) {
            res.status(401).json({ error: err.message });
        }
    }

    // signup
    async authSignup(req, res) {
        const { username, email, password } = req.body;
        try {
            const user = await User.signup(username, password, email);

            //   create token
            const token = createToken(user._id);

            res.status(200).json({ user, token });
        } catch (err) {
            res.status(401).json({ error: err.message });
        }
    }

    async authGoogle(req, res) {
        const {email, username, password} = req.body;
        try {
            const user = await User.signinGoogle(email, username, password);
            const token = createToken(user._id);
            res.json({user, token});
        } catch (error) {
            res.json({error : error.message});
        }
    }
    async updateImage(req, res){
        const user = await req.user;
        const {image} = req.body;
        const update = await User.updateImage(user._id, image);
        res.json(update);
    }
}
module.exports = new authController();
