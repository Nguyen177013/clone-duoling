const User = require("../models/user_model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");


function createToken(_id) {
    return jwt.sign({ _id }, process.env.TOKENSECRET, { expiresIn: "3d"});
}
class authController {
    // login
    async authLogin(req, res) {
        const { username, password } = req.body;
        try {
            const user = await User.login(username, password);
            console.log("this is user: " + user);
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
    async sendMail(req, res) {
        const { email } = req.body;
        try {
            const isContain = await User.findOne({ email: email });
            if (!isContain) {
                throw Error("Email is not exist");
            }
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: process.env.ETHEREAL_USER, // generated ethereal user
                    pass: process.env.ETHEREAL_PASSWORD, // generated ethereal password
                },
            });
            await transporter.sendMail({
                from: '"Duolingo Fake" <ngocsieukibo@gmail.com>', // sender address
                to: `${email}`, // list of receivers
                subject: "🔑", // Subject line
                text: "Password Reset", // plain text body
                html: `<h1>Hello ${isContain?.username}</h1> 
                <br/>
                <div>
                <p>Forgot your password? Let's set up a new one!</p>
                <a href=http://127.0.0.1:5173/reset-password/change-password?id=${isContain._id}&username=${isContain.username}&email=${isContain.email}>Reset Password</a>
                </div>`, // html body
            });
            res.status(200).json({ mssg: "Please check your email" });
        }
        catch (err) {
            res.status(401).json({ error: err.message });
        }
    }
    async changePassword(req, res){
        const {id, password} = req.body;
        try{
            console.log({id, password});
            await User.updatePassword(id, password);
            res.status(200).json({mssg:"your password has been updated"});
        }catch(err){
            res.status(401).json({error: err.message});
        }
    }
}
module.exports = new authController;