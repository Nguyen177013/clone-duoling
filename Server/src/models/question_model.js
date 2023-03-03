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
        type: "String",
        default:0
    },
    type:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"Types"
    },
    difficulty:{
        type:"Number",
        required:true,
        default:0
    }
})

mongoose.model('Questions', Questions);