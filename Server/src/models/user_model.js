const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const User = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isOld: {
            type: Boolean,
            default: false,
        },
        image: {
            type: String,
            default:
                "https://images2.thanhnien.vn/Uploaded/tuyenth/2022_11_02/a5-5205.png",
        },
    },
    { timestamps: true }
);

const saltRounds = 10;
User.statics.signup = async function (username, password, email) {
    if (!username || !password || !email) {
        return { message: "All must be filled" };
    }
    if (!validator.isEmail(email)) {
        return { message: "email must filled character" };
    }
    const isExist = await this.findOne({ email: email });
    const isExist2 = await this.findOne({ username: username });
    if (isExist || isExist2) {
        return { message: "email or username already existed" };
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const user = this.create({ username, password: hash, email });
    return user;
};

User.statics.signin = async function (username, password) {
    if (!username || !password) {
        return { message: "All must be filled" };
    }
    const user = await this.findOne({ username });
    if (!user) {
        return { message: "Incorrect user" };
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return { message: "Incorrect password" };
    }
    await this.findOneAndUpdate({ username }, { isOld: true }, { new: true });
    return user;
};

User.statics.signinGoogle = async function (email, username, password) {
    if (!email) {
        return { message: "email isn't recieved" };
    }
    const user = await this.findOne({ email });
    if (!user) {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hashSync(password, salt);
        const newUser = this.create({ username, password: hash, email });
        return newUser;
    }
    return user;
};
User.statics.updateImage = async function(_id, image){
    if(!_id || !image){
        return {message : 'No have data'};
    }
    const user = await this.findOneAndUpdate({_id},{image},{new : true});
    return user;
}
// ♪♪♪♪♪♪
module.exports = mongoose.model("Users", User);
