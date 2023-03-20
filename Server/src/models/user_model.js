const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcrypt');
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
    },
    { timestamps: true }
);
User.statics.signup = async function (username, email, password) {
    if (!username || !email || !password) {
        throw Error("All field must be filled");
    }
    if (!validator.isEmail(email)) {
        throw Error("Please enter a valid email");
    }
    const isExists = await this.findOne({ email: email });
    if (isExists) {
        throw Error("Email already exists");
    }
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const user = this.create({ username, email, password: hash });
    return user;
}

User.statics.login = async function (username, password) {
    if (!username || !password) {
        throw Error("All field must be filled");
    }
    const user = await this.findOne({username});
    if(!user){
        throw Error("Incorrect username");
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw Error("Incorrect password");
    }
    return user;
}
module.exports = mongoose.model("Users", User);
