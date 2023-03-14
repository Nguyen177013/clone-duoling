const mongoose = require("mongoose");

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

module.exports = mongoose.model("Users", User);
