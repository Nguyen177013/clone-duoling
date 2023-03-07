const mongoose = require('mongoose');
const Questions = new mongoose.Schema({
    question:{
        type: 'String',
        required: true
    },
    options:{
        type:["String"],
        required: true
    },
    answer:{
        type: "Number",
        default:0
    },
    type:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"Types"
    },
})

module.exports=mongoose.model('questions', Questions);