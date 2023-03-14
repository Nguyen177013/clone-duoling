const mongoose = require("mongoose");

require('dotenv').config();

// const MongooseURL = process.env.DB_URL;

const initial = async () => {
    let result = await mongoose.connect("mongodb://127.0.0.1:27017/Duolingo");
    if(result){
        return console.log("Connected to Mongoose successfully");
    }
    else{
        return console.log("Fail to connect to Mongoose");
    }
};
module.exports = initial;