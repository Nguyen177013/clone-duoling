const User = require("../models/user_model");
const jwt = require("jsonwebtoken");

function createToken(_id) {
    return jwt.sign({ _id }, process.env.TOKENSECRET, { expiresIn: "3d" });
}
class authController {
    // login
    async authLogin(req, res) {
        const { username, password } = req.body;
        try {
            const user = await User.login(username, password);
            console.log("this is user: "+user);
            //   create token
            const token = createToken(user._id);
            res.status(200).json({ user: user.username, token });
        }
        catch (err) {
            res.status(401).json({ error: err.message });
        }
    }

    // signup
    async authSignup(req, res) {
        const { username, email, password } = req.body;
        try {
            const user = await User.signup(username, email, password);

            //   create token
            const token = createToken(user._id);

            res.status(200).json({ user: user.username, token });
        }
        catch (err) {
            res.status(401).json({ error: err.message });
        }
    }
}
module.exports = new authController;