const mongoose = require("mongoose");

require('dotenv').config();

const MongooseURL = process.env.DB_URL;

const initial = async () => {
    let result = await mongoose.connect("mongodb://localhost:27017/Duolingo");
    if(result){
        console.log("Connected to Mongoose successfully");
    }
};
module.exports = initial;