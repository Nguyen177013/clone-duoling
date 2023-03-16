const mongoose = require("mongoose");

require('dotenv').config();

const MongooseURL = process.env.DB_URL;

const initial = async () => {
    let result = await mongoose.connect(MongooseURL);
    if(result){
        return console.log("Connected to Mongoose successfully");
    }
    else{
        return console.log("Fail to connect to Mongoose");
    }
};
module.exports = initial;