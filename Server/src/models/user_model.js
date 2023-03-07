const mongoose = require("mongoose");

const User = new mongoose.Schema({
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
    idOld : {
        type : Boolean,
        default : false,
    }
});
mongoose.model("users", User);
